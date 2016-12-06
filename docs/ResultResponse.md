# idcheckio_nodejs_client.ResultResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | uid | 
**analysisRefUid** | **String** | analysisRefUid | 
**checkReportSummary** | [**CheckSummaryOfTheSubmittedDocument**](CheckSummaryOfTheSubmittedDocument.md) |  | 
**documentClassification** | [**ClassificationOfTheSubmittedDocument**](ClassificationOfTheSubmittedDocument.md) |  | 
**documentDetail** | [**DetailedInformationOfTheSubmittedDocument**](DetailedInformationOfTheSubmittedDocument.md) |  | 
**holderDetail** | [**DetailedInformationOfTheHolderOfTheSubmittedDocument**](DetailedInformationOfTheHolderOfTheSubmittedDocument.md) |  | 
**mrz** | [**Mrz**](Mrz.md) |  | 
**controls** | [**[ControlGroup]**](ControlGroup.md) | Performed controls on the submitted document | 
**image** | [**[ExtractedImage]**](ExtractedImage.md) | Cropped image of the submitted document according request | [optional] 


