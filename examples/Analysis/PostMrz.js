var apiClient = new idcheckio_nodejs_client.ApiClient();
apiClient.basePath = "https://api.idcheck.io:443/rest";

var basic = apiClient.authentications['basic'];
basic.username = 'exemple@exemple.com';
basic.password = 'exemple';

var instance = new idcheckio_nodejs_client.AnalysisApi();
instance.apiClient = apiClient;

var opts = {
  'asyncMode': false,
  'acceptLanguage': "en"
};
var body = new idcheckio_nodejs_client.MrzRequest();
body.line1 = "IDFRABERTHIER<<<<<<<<<<<<<<<<<<<<<<<";
body.line2 = "9409923102854CORINNE<<<<<<<6512068F4";

instance.postMrz(body, opts, function(error, data, response) {
  if (error) throw error;
  console.log(data.holderDetail);
});
