/**
 * The IDCHECKIO API library
 */
var logger = console;
var restify = require('restify-clients');


// IDCHECKIO API ACCESS POINTS
const demo = {
    protocol : 'https',
    host     : 'api-test.idcheck.io',
    port     : '443'
};
const prod = {
    protocol : 'https',
    host     : 'api.idcheck.io',
    port     : '443'
};


exports.idcheckio = function ( config ){
    var self = this;

    if( !config || !config.user || !config.pwd ){
        console.error('ERROR - [%s] IDCHECKIO library : your user and password MUST be defined in config : \n' +
        'ERROR - config exemple : { user:myaccount@email.com , pwd:mypassword } \n' +
        'ERROR - If you do not have yours, contact us to get an account at contact@idcheck.io', __filename );
        return 'ERROR';
    }else{
        // USER and PASSWORD MANDATORY
        self.user   = config.user || 'NO_USER';
        self.pwd    = config.pwd  || 'NO_PWD';
        // Not mandatory other configs :
        self.language = (config.language == 'FR' || config.language == 'EN')?config.language:'EN';
        self.host     =  config.host || prod.host;    // default to Prod
        self.protocol = (config.protocol == 'http' || config.protocol == 'https')?config.protocol:prod.protocol; // default to Prod
        self.port     =  config.port || prod.port;    // default to Prod
    }

    // INIT restify client
    var clientR = restify.createJsonClient({
        url: self.protocol+'://'+self.host+':'+self.port,
        version: '*',
        servername: self.host,
        rejectUnauthorized: true,   // SNI
        headers : {
            'Accept-Language': self.language
        }
    });
    clientR.basicAuth(self.user, self.pwd);


    /**
     * ANALYSE MRZ
     * Analyse an MRZ
     *
     * @param line1 first line of MRZ
     * @param line2
     * @param line3
     * @param callback
     * @param async appel en asynchrone
     * @returns {ClientRequest}
     */
    this.analyseMRZ = function( line1, line2, line3, callback, async ){
        // default args
        var asyncMode = async || false ;
        line1 = line1 || '';
        line2 = line2 || '';
        line3 = line3 || '';
        // args call api
        var methode = '/rest/v0/task/mrz';
        var args    = '?asyncMode='+asyncMode.toString();
        var data    = { line1:line1, line2:line2, line3:line3};
        // da call
        clientR.post( methode + args, data,  function ( err, req, response, data ) {
            // parsed response body as js object
            //console.log( JSON.stringify(data,0,2) );
            //console.log( JSON.stringify(response,0,2) );
            if(err){ callback(err); }else{
                    switch (response.statusCode) {
                        case 200 :
                        case 202 :
                            callback(null, data);
                            break;
                        default :
                            console.error(' API IDCHECKIO analyseMRZ : something went wrong : %s , %s',
                                response.statusCode, JSON.stringify(data));
                            callback(data);
                    }
            }
        });
    };

    /**
     * ANALYSE IMAGE
     * @param recto base64 of the card recto side (MRZ side)
     * @param verso base64 of the verso card side
     * @param async parametre asynchrone
     * @param callback
     */
    this.analyseImage = function( recto, verso, callback, async ){
        verso = (verso)?verso:'';
        if( !recto || recto == '' ){
            return callback( 'RECTO AR' );
        }
        var asyncMode = async || false ;
        var args    = '?asyncMode='+asyncMode.toString();
      // args call api
        var encoded_recto = recto;
        var encoded_verso = verso;
        var data    = {'frontImage':encoded_recto,
                        'backImage':encoded_verso};
        clientR.post( '/rest/v0/task/image'+args , data,
            function (err, req, response, data)
            {
                if(err){ callback(err); }else{
                    // parsed response body as js object
                    //console.debug( JSON.stringify(data,0,2) );
                    switch (response.statusCode) {
                        case 200 :
                        case 202 :
                            return callback(null, data);
                            break;
                        default :
                            console.error(' API IDCHECKIO analyseImage : something went wrong : %s : %s ',
                                response.statusCode, JSON.stringify(data));
                            return callback(data);
                    }
                }
        });
    };

    /**
     * GET REPORT
     * get the analyse report (pdf)
     * @param uid the uid of control to retrieve the pdf.
     * @param callback (error, result)
     */
    this.getReport = function( uid  , callback ) {
        clientR.get( '/rest/v0/pdfreport/'+uid , function (err, req, response, data) {
            if(err){ callback(err); }else{
                switch (response.statusCode) {
                    case 200 :
                        return callback(null, data);
                        break;
                    default :
                        console.error(' API IDCHECKIO : something went wrong retrieving the pdf from server : %s , %s ',
                            response.statusCode, JSON.stringify(data));
                        return callback(data);
                }
            }
        });
    };

    /**
     * ANALYSE STATUS
     * For asynchronus requests : get the analyse status
     *
     * @param uid : the UID of the task getted from async request
     * @param wait : Specify the maximum wait time (in ms) to wait for task completion before returning.
     * @param callback
     */
    this.analysisStatus = function( uid , wait, callback ){

      // args call api
      var methode = '/rest/v0/task/'+uid;
      var args    = (!isNaN(wait))?'?wait='+wait:'';
      // da call
      clientR.get( methode + args ,  function ( err, req, response, data ) {
        // parsed response body as js object
        //console.log( JSON.stringify(data,0,2) );
        //console.log( JSON.stringify(response,0,2) );
        if(err){ callback(err); }else{
          switch (response.statusCode) {
            case 200 :
            case 303 :
              callback(null, data);
              break;
            default :
              console.error(' API IDCHECKIO analyseStatus : something went wrong : %s , %s',
                response.statusCode, JSON.stringify(data));
              callback(data);
          }
        }
      });
    };

  /**
   * ANALYSE RESULT
   * For asynchronus requests : get the analyse result
   *
   * @param uid : the UID of the task getted from async request.
   * @param rectoImageCropped : flag for requesting the cropped image of the sumitted frontImaget.
   * @param signatureImageCropped : flag for requesting the signature image of the document
   * @param faceImageCropped : flag for requesting the cropped image of the holder's face
   * @param callback
   */
  this.analysisResult = function( uid , rectoImageCropped, signatureImageCropped, faceImageCropped, callback ){

    // args call api
    var methode = '/rest/v0/result/'+uid;
    var rectoImageCropped = rectoImageCropped || false;
    var signatureImageCropped = signatureImageCropped || false;
    var faceImageCropped = faceImageCropped || false;
    var args    = '?rectoImageCropped='+rectoImageCropped.toString() +
                  '&signatureImageCropped='+signatureImageCropped.toString() +
                  '&faceImageCropped='+faceImageCropped.toString();
    // da call
    clientR.get( methode + args ,  function ( err, req, response, data ) {
      // parsed response body as js object
      //console.log( JSON.stringify(data,0,2) );
      //console.log( JSON.stringify(response,0,2) );
      if(err){ callback(err); }else{
        switch (response.statusCode) {
          case 200 :
            callback(null, data);
            break;
          default :
            console.error(' API IDCHECKIO analyseResult : something went wrong : %s , %s',
              response.statusCode, JSON.stringify(data));
            callback(data);
        }
      }
    });
  };

};
