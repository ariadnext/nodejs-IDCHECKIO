var apiClient = new idcheckio_nodejs_client.ApiClient();
apiClient.basePath = "https://api.idcheck.io:443/rest";

var basic = apiClient.authentications['basic'];
basic.username = 'exemple@exemple.com';
basic.password = 'exemple';

var instance = new idcheckio_nodejs_client.AdministrationApi();
instance.apiClient = apiClient;

var opts = {
  'acceptLanguage': "en"
};

instance.getUser(opts, function(error, data, response) {
  if (error) throw error;
  console.log(data);
});
