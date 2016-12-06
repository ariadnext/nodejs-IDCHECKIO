# idcheckio_nodejs_client.AnalysisApi

All URIs are relative to *https://localhost/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReport**](AnalysisApi.md#getReport) | **GET** /v0/pdfreport/{analysisRefUid} | HTTP GET report (demo)
[**getResult**](AnalysisApi.md#getResult) | **GET** /v0/result/{analysisRefUid} | HTTP GET result
[**getTask**](AnalysisApi.md#getTask) | **GET** /v0/task/{analysisRefUid} | HTTP GET task
[**postImage**](AnalysisApi.md#postImage) | **POST** /v0/task/image | HTTP POST task image
[**postMrz**](AnalysisApi.md#postMrz) | **POST** /v0/task/mrz | HTTP POST task mrz


<a name="getReport"></a>
# **getReport**
> ReportResponse getReport(analysisRefUid, opts)

HTTP GET report (demo)

Get a pdf report (base64 encoded) (demo)

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');
var defaultClient = idcheckio_nodejs_client.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new idcheckio_nodejs_client.AnalysisApi();

var analysisRefUid = "analysisRefUid_example"; // String | Report analysisRefUid

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
apiInstance.getReport(analysisRefUid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisRefUid** | **String**| Report analysisRefUid | 
 **acceptLanguage** | **String**| Accept language header | [optional] 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getResult"></a>
# **getResult**
> ResultResponse getResult(analysisRefUid, opts)

HTTP GET result

Get result controls

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');
var defaultClient = idcheckio_nodejs_client.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new idcheckio_nodejs_client.AnalysisApi();

var analysisRefUid = "analysisRefUid_example"; // String | Result analysisRefUid

var opts = { 
  'acceptLanguage': "acceptLanguage_example", // String | Accept language header
  'rectoImageCropped': false, // Boolean | True to obtain recto image cropped if applicable
  'faceImageCropped': false, // Boolean | True to obtain face image cropped if applicable
  'signatureImageCropped': false // Boolean | True to obtain signature image cropped if applicable
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getResult(analysisRefUid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisRefUid** | **String**| Result analysisRefUid | 
 **acceptLanguage** | **String**| Accept language header | [optional] 
 **rectoImageCropped** | **Boolean**| True to obtain recto image cropped if applicable | [optional] [default to false]
 **faceImageCropped** | **Boolean**| True to obtain face image cropped if applicable | [optional] [default to false]
 **signatureImageCropped** | **Boolean**| True to obtain signature image cropped if applicable | [optional] [default to false]

### Return type

[**ResultResponse**](ResultResponse.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getTask"></a>
# **getTask**
> TaskResponse getTask(analysisRefUid, opts)

HTTP GET task

Get task status

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');
var defaultClient = idcheckio_nodejs_client.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new idcheckio_nodejs_client.AnalysisApi();

var analysisRefUid = "analysisRefUid_example"; // String | Task analysisRefUid

var opts = { 
  'acceptLanguage': "acceptLanguage_example", // String | Accept language header
  'wait': 789 // Integer | specify a maximum wait time in milliseconds
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTask(analysisRefUid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisRefUid** | **String**| Task analysisRefUid | 
 **acceptLanguage** | **String**| Accept language header | [optional] 
 **wait** | **Integer**| specify a maximum wait time in milliseconds | [optional] 

### Return type

[**TaskResponse**](TaskResponse.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="postImage"></a>
# **postImage**
> ResultResponse postImage(body, opts)

HTTP POST task image

POST an image check task

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');
var defaultClient = idcheckio_nodejs_client.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new idcheckio_nodejs_client.AnalysisApi();

var body = new idcheckio_nodejs_client.ImageRequest(); // ImageRequest | Image request

var opts = { 
  'asyncMode': true, // Boolean | true to activate asynchrone mode
  'acceptLanguage': "acceptLanguage_example" // String | Accept language header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postImage(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ImageRequest**](ImageRequest.md)| Image request | 
 **asyncMode** | **Boolean**| true to activate asynchrone mode | [optional] 
 **acceptLanguage** | **String**| Accept language header | [optional] 

### Return type

[**ResultResponse**](ResultResponse.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="postMrz"></a>
# **postMrz**
> ResultResponse postMrz(body, opts)

HTTP POST task mrz

POST a mrz check task

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');
var defaultClient = idcheckio_nodejs_client.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new idcheckio_nodejs_client.AnalysisApi();

var body = new idcheckio_nodejs_client.MrzRequest(); // MrzRequest | Mrz request

var opts = { 
  'asyncMode': true, // Boolean | true to activate asynchrone mode
  'acceptLanguage': "acceptLanguage_example" // String | Accept language header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postMrz(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MrzRequest**](MrzRequest.md)| Mrz request | 
 **asyncMode** | **Boolean**| true to activate asynchrone mode | [optional] 
 **acceptLanguage** | **String**| Accept language header | [optional] 

### Return type

[**ResultResponse**](ResultResponse.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

