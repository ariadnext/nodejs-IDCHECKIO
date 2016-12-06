var apiClient = new idcheckio_nodejs_client.ApiClient();
apiClient.basePath = "https://api.idcheck.io:443/rest";

var basic = apiClient.authentications['basic'];
basic.username = 'exemple@exemple.com';
basic.password = 'exemple';

var instance = new idcheckio_nodejs_client.AnalysisApi();
instance.apiClient = apiClient;

var opts = {
  'acceptLanguage': "en",
  'wait': 30000
};

# uid from a response postMrz or postImage
instance.getTask(uid, opts, function(error, data, response){
  if (error) throw error;
});
