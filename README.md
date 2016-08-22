# IDCHECKIO 
The ID document checking NodeJS library.

![IDCHECKIO logo](https://www.idcheck.io/content/uploads/sites/2/2015/12/tick_mark.png)

Web application : <https://idcheck.io>

Mashape REST API : <https://market.mashape.com/ariadnext/idcheck-io-api>

Swagger REST API : <https://api.idcheck.io/swagger/#/>

Python Client library : <https://github.com/ariadnext/IDCheckIO>

Provided by : <http://www.ariadnext.com>

## Account

To create your account an credit, contact us by email with your needs at : <contact@idcheck.io>



## Installation
Simply...

	npm install idcheckio --save

## Usage
Fast path :

	var Idcheckio = require('idcheckio').idcheckio;

	// your idcheckio account.
	var config = { user:'my@email.com', pwd:'mypwd' };
	var idcheckio = new Idcheckio( config );
	
    idcheckio.analyseMRZ( 'P<UTOBANDERAS<<LILIAN<<<<<<<<<<<<<<<<<<<<<<<', 
            			  '01234567894UTO8001014F2501017<<<<<<<<<<<<<06', 
            			  '', function(err, result){
       if(err){ throw err; }
    	console.log(JSON.stringify(result,0,2));
    }
	
### complete config json
	{
		user : 'emailAccount@idcheckio.com',   // MANDATORY
		pwd  : 'mypassword',				      // MANDATORY
		language : 'EN' || 'FR',               // default: EN
		protocol : 'https' || 'http',          // default: https
		host : 'api.idcheck.io',               // default: api.idcheck.io
		port : '443'                           // default: 443
	}
	
### <a name="analyseMRZ"></a>  analyseMRZ
Analyse MRZ lines, get result of the analysis into callback.

 - Firsts parameters are the three lines of MRZ, complete lines with ''.
 - async : true || false : requete en mode asynchrone ( voir analyseStatus & analyseResult )

Get a pdf report from the uid in result and the [getReport](#getReport) section.

	idcheckio.analyseMRZ( 'P<UTOBANDERAS<<LILIAN<<<<<<<<<<<<<<<<<<<<<<<', 
            			  '01234567894UTO8001014F2501017<<<<<<<<<<<<<06', 
            			  '', function(err, AnalyseResultObject){
       if(err){ throw err; }
    	console.log(JSON.stringify(AnalyseResultObject,0,2));
    }, async = false );
    
The [AnalyseResultObject](#AnalyseResultObject) is described below.


### <a name="analyseImage"></a> analyseImage
Analyse an image (pdf, jpg, png, tiff), get result of the analysis into callback.

 - MANDATORY First parameter is the document face ( the MRZ is visible ) encoded in base64.
 - Secound parameter is the document back ( face without MRZ ), '' if no  face.
 - async : true || false : requete en mode asynchrone ( voir analyseStatus & analyseResult )

Get a pdf report from the uid in result and the [getReport](#getReport) section.

	idcheckio.analyseImage( bufFront.toString('base64'),
                           bufBack.toString('base64'),
                           function(err, AnalyseResultObject){
                if(err) { throw err; }
                console.log(JSON.stringify(AnalyseResultObject,0,2));
            }, async = false );
    
The [AnalyseResultObject](#AnalyseResultObject) is described below.


### <a name="getReport"></a> getReport

Get a PDF Report with the result of analysis.

This function can be called after analyseMRZ() or analyseImage(), with uid parameter returned by these functions.

The [ReportObject](#ReportObject) returned is described below.

	idcheckio.getReport( '1234009234',
	                function(err, res ){
	                    if(err) { throw err; }
	                    console.log(JSON.stringify(result,0,2));
	                    fs.writeFileSync("./test/testReport.pdf", res.report, 'base64');
	                });
	               
	               
### <a name="analysisStatus"></a> analysisStatus

For asynchronous requests : get the analysis status.

This function can be called after analyseMRZ() or analyseImage(), with uid parameter returned by these functions.

- wait parameter :  Specify the maximum wait time (in ms) to wait for task completion before returning. This parameter can be used to reduce the number of time that the user will have to poll the server before detecting task completion.

The [TaskDetail](#TaskDetail) returned is described below.

	idcheckio.analysisStatus( '1234009234', 
									wait = 1000,
	                function(err, res ){
	                    if(err) { throw err; }
	                    console.log(JSON.stringify(result,0,2));
	                });

### <a name="analysisResult"></a> analysisResult

For asynchronous AND synchronous requests : get the analysis result when analysis finished.

This function can be called after analyseMRZ() or analyseImage(), with the UID parameter returned by these functions.

Some optional parameters : (default false)
 - rectoImageCropped : flag for requesting the cropped image of the sumitted frontImage
 - signatureImageCropped : flag for requesting the signature image of the document
 - faceImageCropped : flag for requesting the cropped image of the holder's face


The [AnalyseResultObject](#AnalyseResultObject) returned is described below.

	idcheckio.analysisResult( '1234009234', 
									rectoImageCropped = true,
									signatureImageCropped = false, 
									faceImageCropped = false,
	                function(err, res ){
	                    if(err) { throw err; }
	                    console.log(JSON.stringify(result,0,2));
	                }
	          );


## Test
A test folder is accessible and works with your test logins that we provided. 

	cd test/
	// fill the idcio_config object with your logins into test.js
	npm test	

#### Dependencies

Need NodeJS > v0.10.0

## Objects

### <a name="AnalyseResultObject"></a> AnalyseResultObject

Exemple of result :

	{
	  "uid": "1234009234",
	  "analysisRefUid": "1234660",
	  "checkReportSummary": {
	    "check": [
	      {
	        "identifier": "SUMMARY_ID_IDENTIFIED",
	        "titleMsg": "Document identification",
	        "resultMsg": "Identified document",
	        "result": "OK"
	      },
	      {
	        "identifier": "SUMMARY_ID_FALSIFIED",
	        "titleMsg": "Document falsification detection",
	        "resultMsg": "The document seems to be falsified",
	        "result": "ERROR"
	      },
	      {
	        "identifier": "SUMMARY_ID_SPECIMEN",
	        "titleMsg": "Sample document detection",
	        "resultMsg": "Sample document",
	        "result": "ERROR"
	      },
	      {
	        "identifier": "SUMMARY_ID_EXPIRED",
	        "titleMsg": "Document expiration",
	        "resultMsg": "Not expired",
	        "result": "OK"
	      }
	    ]
	  },
	  "documentClassification": {
	    "idType": "P"
	  },
	  "documentDetail": {
	    "emitCountry": "UTO",
	    "documentNumber": "012345678",
	    "extraInfos": [
	      {
	        "dataKey": "EXPIRATION_DATE",
	        "dataValue": "10/50/F2",
	        "title": "Expiration date"
	      },
	      {
	        "dataKey": "PERSONAL_NUMBER",
	        "dataValue": "7",
	        "title": "Personal number"
	      }
	    ]
	  },
	  "holderDetail": {
	    "lastName": [
	      "BANDERAS"
	    ],
	    "firstName": [
	      "LILIAN"
	    ],
	    "nationality": "4UT",
	    "gender": "X",
	    "extraInfos": [
	      {
	        "dataKey": "BIRTH_DATE",
	        "dataValue": "10/00/O8",
	        "title": "Date of birth"
	      }
	    ]
	  },
	  "mrz": {
	    "line1": "P<UTOBANDERAS<<LILIAN<<<<<<<<<<<<<<<<<<<<<<<",
	    "line2": "01234567894UTO8001014F2501017<<<<<<<<<<<<<06"
	  }
	}
	
	
### <a name="ReportObject"></a> ReportObject

	{ uid: '1234920434',
	  analysisRefUid: '1234447',
	  report: 'JVBERi0x....UVPRgo='
	 }

### <a name="TaskDetail"></a> TaskDetail

	{
	  "uid": "1234920434",
	  "accepted": "2016-08-22T12:09:20.566+0000",
	  "started": "2016-08-22T12:09:20.566+0000",
	  "ended": "2016-08-22T12:09:20.742+0000",
	  "redirectUrl": "https://api-test.idcheck.io/rest/v0/result/1234920434"
	}



## TODO

 - exemple folder with sample client code (almost same as /test/test.js)
