# idcheckio_nodejs_client.ImageRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | API version (for backward compatibility purpose) | [optional] 
**frontImage** | **String** | frontImage containing front daylight image of the identity document (base64 encoded, no wrap, jpg/png/tiff/pdf format) | 
**frontImageIr** | **String** | frontImage containing front infrared image of the identity document (base64 encoded, no wrap, jpg/png/tiff/pdf format) | 
**frontImageUv** | **String** | frontImage containing front ultraviolet image of the identity document (base64 encoded, no wrap, jpg/png/tiff/pdf format) | 
**backImage** | **String** | backImage containing daylight back image of the identity document (base64 encoded, no wrap, jpg/png/tiff/pdf format) | [optional] 
**backImageIr** | **String** | backImage containing infrared back image of the identity document (base64 encoded, no wrap, jpg/png/tiff/pdf format) | [optional] 
**backImageUv** | **String** | backImage containing ultraviolet back image of the identity document (base64 encoded, no wrap, jpg/png/tiff/pdf format) | [optional] 
**rectoImageCropped** | **Boolean** | rectoImageCropped true to obtain recto image cropped if applicable | [optional] [default to false]
**faceImageCropped** | **Boolean** | faceImageCropped true to obtain recto image cropped if applicable | [optional] [default to false]
**signatureImageCropped** | **Boolean** | signatureImageCropped true to obtain recto image cropped if applicable | [optional] [default to false]


