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
        user: idcio_logins.userQualif,
        pwd: idcio_logins.pwdQualif
    };
    // init
    var Idcheckio = require('../lib/idcheckio.js').idcheckio;
    var idcheckio = new Idcheckio( idcio_config );

    describe('IDCHECKIO', function() {

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
                done();
            });

        });

        var uidResult = '';
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
                                        uidResult = res.uid;
                                        done();
            });
        });

        it('should getReport for analyse', function(done) {
            idcheckio.getReport( uidResult,
                function(err, res ){
                    if(err) {
                        console.error(err);
                        test.fail(err);
                    }
                    test.object(res).hasKey('uid');
                    fs.writeFileSync("./test/testReport.pdf", res.report, 'base64');
                    done();
                });
        });

    });
});