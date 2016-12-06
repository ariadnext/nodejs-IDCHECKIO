# idcheckio_nodejs_client.SandboxApi

All URIs are relative to *https://localhost/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getImage**](SandboxApi.md#getImage) | **GET** /v0/sandbox/image/{imageUid} | HTTP GET image
[**getImageList**](SandboxApi.md#getImageList) | **GET** /v0/sandbox/imagelist | HTTP GET images list
[**getMrz**](SandboxApi.md#getMrz) | **GET** /v0/sandbox/mrz/{mrzUid} | HTTP GET mrz
[**getMrzList**](SandboxApi.md#getMrzList) | **GET** /v0/sandbox/mrzlist | HTTP GET mrz list


<a name="getImage"></a>
# **getImage**
> [&#39;String&#39;] getImage(imageUid, opts)

HTTP GET image

GET image

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');

var apiInstance = new idcheckio_nodejs_client.SandboxApi();

var imageUid = "imageUid_example"; // String | EnumDemoDocsImage

var opts = { 
  'rawType': "rawType_example", // String | Image raw type
  'face': "face_example", // String | Image face
  'light': "light_example" // String | Image light
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImage(imageUid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageUid** | **String**| EnumDemoDocsImage | 
 **rawType** | **String**| Image raw type | [optional] 
 **face** | **String**| Image face | [optional] 
 **light** | **String**| Image light | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: *_/_*

<a name="getImageList"></a>
# **getImageList**
> ImageListResponse getImageList()

HTTP GET images list

GET images list

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');

var apiInstance = new idcheckio_nodejs_client.SandboxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ImageListResponse**](ImageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMrz"></a>
# **getMrz**
> MrzResponse getMrz(mrzUid)

HTTP GET mrz

GET mrz

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');

var apiInstance = new idcheckio_nodejs_client.SandboxApi();

var mrzUid = "mrzUid_example"; // String | EnumDemoDocsMrz


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMrz(mrzUid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mrzUid** | **String**| EnumDemoDocsMrz | 

### Return type

[**MrzResponse**](MrzResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMrzList"></a>
# **getMrzList**
> MrzListResponse getMrzList()

HTTP GET mrz list

GET mrz list

### Example
```javascript
var idcheckio_nodejs_client = require('idcheckio_nodejs_client');

var apiInstance = new idcheckio_nodejs_client.SandboxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMrzList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MrzListResponse**](MrzListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

