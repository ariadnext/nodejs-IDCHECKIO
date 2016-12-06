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

var body = new idcheckio_nodejs_client.ImageRequest();
var front = require('fs').readFileSync('/tmp/berthier_recto.jpg');
body.frontImage = front.toString('base64');

instance.postImage(body, opts, function(error, data, response) {
  if (error) throw error;
  console.log(data.holderDetail);
});
