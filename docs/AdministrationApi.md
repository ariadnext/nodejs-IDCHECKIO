# idcheckio_nodejs_client.AdministrationApi

All URIs are relative to *https://localhost/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHealth**](AdministrationApi.md#getHealth) | **GET** /v0/admin/health | HTTP GET health
[**getUser**](AdministrationApi.md#getUser) | **GET** /v0/admin/user | HTTP GET user


<a name="getHealth"></a>
# **getHealth**
> HealthResponse getHealth()

HTTP GET health

GET server health (OK 200)

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');

var apiInstance = new idcheckio_nodejs_client.AdministrationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHealth(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HealthResponse**](HealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getUser"></a>
# **getUser**
> UserResponse getUser(opts)

HTTP GET user

Get user informations

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');
var defaultClient = idcheckio_nodejs_client.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new idcheckio_nodejs_client.AdministrationApi();

var opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Accept language header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Accept language header | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

