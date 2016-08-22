/**
 * TESTS LIBRARY IDCHECKIO
 * run : npm test
 */

var test = require('unit.js');
var assert = require('assert');
var fs = require('fs');


/*
 *  login / mdp   logins, you can set it manually with the line below
 *
 */
// var idcio_logins = { user: 'myaccountemail@myemail.com' , pwd : 'mypwd' };
var idcio_logins = require('./login.test.json');


describe('IDCHECKIO API', function() {

    // TEST API HOST and config
    idcio_config = {
        user: idcio_logins.prod.user,
        pwd: idcio_logins.prod.pwd
    };
    // surcharge pour tests en dev
    idcio_config = idcio_logins.demo;  // prod, demo, qualif

    // init
    var Idcheckio = require('../lib/idcheckio.js').idcheckio;
    var idcheckio = new Idcheckio( idcio_config );

    describe('IDCHECKIO', function() {

      var uidAsyncMRZAnalyse = '';
      var uidAsyncIMAGEAnalyse = '';
      var uidSyncMRZAnalyse = '';
      var uidSyncIMAGEAnalyse = '';

      //
      //  ASYNCHRONOUS REQUESTS
      //

      it('should analyseMRZ ASYNCHRONOUS', function(done) {
        var l1 = 'P<UTOBANDERAS<<LILIAN<<<<<<<<<<<<<<<<<<<<<<<';
        var l2 = '01234567894UTO8001014F2501017<<<<<<<<<<<<<06';
        var l3 = '';
        idcheckio.analyseMRZ( l1, l2, l3, function(err, res){
          if(err) {
            console.error(err);
            test.fail(err);
          }
          console.log(JSON.stringify(res,0,2));
          test.object(res)
            .hasKey('uid')
            .hasKey('redirectUrl');
          uidAsyncMRZAnalyse = res.uid;
          done();
        }, true ); // <-- ASYNC

      });

      it('should analyseImage CNI ASYNCHRONOUS', function(done) {
        var bufFrontCNI = fs.readFileSync('./test/img/IDCNIFront.jpg');
        var bufBackCNI = fs.readFileSync('./test/img/IDCNIBack.jpg');
        idcheckio.analyseImage( bufFrontCNI.toString('base64'),
          bufBackCNI.toString('base64'),
          function(err, res){
            if(err) {
              console.error(err);
              test.fail(err);
            }
            console.log(JSON.stringify(res,0,2));
            test.object(res)
              .hasKey('uid')
              .hasKey('redirectUrl');
            uidAsyncIMAGEAnalyse = res.uid;
            done();
          }, true );  // <-- ASYNC
      });

      it('should get status of an unfinished analysis ', function(done) {
        idcheckio.analysisStatus( uidAsyncIMAGEAnalyse , 0, function(err, res){
          if(err) {
            console.error(err);
            test.fail(err);
          }
          console.log(JSON.stringify(res,0,2));
          test.object(res)
            .hasKey('uid')
            .hasKey('accepted')
            .notHasKey('ended')
            .hasKey('redirectUrl');
          assert.equal( uidAsyncIMAGEAnalyse , res.uid );
          done();
        });
      });

      it('should get status of a finished analysis ', function(done) {
        idcheckio.analysisStatus( uidAsyncMRZAnalyse , 2000, function(err, res){
          if(err) {
            console.error(err);
            test.fail(err);
          }
          console.log(JSON.stringify(res,0,2));
          test.object(res)
            .hasKey('uid')
            .hasKey('ended')
            .hasKey('redirectUrl');
          assert.equal( uidAsyncMRZAnalyse , res.uid );
          done();
        });
      });


      //
      //  SYNCHRONOUS REQUESTS
      //

        it('should analyseMRZ', function(done) {
            var l1 = 'P<UTOBANDERAS<<LILIAN<<<<<<<<<<<<<<<<<<<<<<<';
            var l2 = '01234567894UTO8001014F2501017<<<<<<<<<<<<<06';
            var l3 = '';
            idcheckio.analyseMRZ( l1, l2, l3, function(err, res){
                if(err) {
                    console.error(err);
                    test.fail(err);
                }
                console.log(JSON.stringify(res,0,2));
                test.object(res)
                    .hasKey('uid')
                    .hasKey('checkReportSummary');
                assert.equal("012345678", res.documentDetail.documentNumber );
              uidSyncMRZAnalyse = res.uid;
                done();
            }, false);
        });

        it('should analyseImage CNI', function(done) {
            var bufFrontCNI = fs.readFileSync('./test/img/IDCNIFront.jpg');
            var bufBackCNI = fs.readFileSync('./test/img/IDCNIBack.jpg');
            idcheckio.analyseImage( bufFrontCNI.toString('base64'),
                                    bufBackCNI.toString('base64'),
                                    function(err, res){
                if(err) {
                    console.error(err);
                    test.fail(err);
                }
                test.object(res).hasKey('uid').hasKey('checkReportSummary');
                assert.equal("940992310285", res.documentDetail.documentNumber );
                assert.equal("IDFRABERTHIER<<<<<<<<<<<<<<<<<<<<<<<", res.mrz.line1 );
                                      uidSyncIMAGEAnalyse = res.uid;
                                      done();
            });
        }, false);

        it('should getReport for analyse', function(done) {
            idcheckio.getReport( uidSyncIMAGEAnalyse,
                function(err, res ){
                    if(err) {
                        console.error(err);
                        test.fail(err);
                    }
                    test.object(res).hasKey('uid');
                    fs.writeFileSync("./test/testReportIMAGEAnalyse.pdf", res.report, 'base64');
                    done();
                });
        }, false );



      //
      //  ASYNCHRONOUS ANALYSIS RESULTS
      //

      it('should get result of finished MRZ Asynchronous analysis ', function(done) {
        idcheckio.analysisResult( uidAsyncMRZAnalyse, false, false, false , // <-- all cropped not requested
          function(err, res){
            if(err) {
              console.error(err);
              test.fail(err);
            }
            console.log(JSON.stringify(res,0,2));
            test.object(res)
              .hasKey('uid')
              .hasKey('checkReportSummary');
            assert.equal("012345678", res.documentDetail.documentNumber );
            assert.equal( uidAsyncMRZAnalyse , res.uid );
            done();
          }, false);
      });

      it('should getReport for MRZ Asynchronous analysis', function(done) {
        idcheckio.getReport( uidAsyncMRZAnalyse,
          function(err, res ){
            if(err) {
              console.error(err);
              test.fail(err);
            }
            test.object(res).hasKey('uid');
            fs.writeFileSync("./test/testReportMRZAnalyse.pdf", res.report, 'base64');
            done();
          });
      }, false );


      it('should get result of finished IMAGE Asynchronous analysis ', function(done) {
        idcheckio.analysisResult( uidAsyncIMAGEAnalyse, true, true, true , // <-- all cropped  requested
          function(err, res){
            if(err) {
              console.error(err);
              test.fail(err);
            }
            test.object(res).hasKey('uid').hasKey('checkReportSummary');
            assert.equal("940992310285", res.documentDetail.documentNumber );
            assert.equal("IDFRABERTHIER<<<<<<<<<<<<<<<<<<<<<<<", res.mrz.line1 );
            assert.equal( uidAsyncIMAGEAnalyse , res.uid );
            done();
          });
      }, false);



    });
});