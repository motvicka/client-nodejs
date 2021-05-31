# Pipedrive.ActivityPostObjectAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **String** | Subject of the Activity. When value for subject is not set, it will be given a default value &#x60;Call&#x60;. | [optional] 
**type** | **String** | Type of the Activity. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes. When value for type is not set, it will be given a default value &#x60;Call&#x60;. | [optional] 
**userId** | **Number** | The ID of the User whom the Activity is assigned to. If omitted, the Activity is assigned to the authorized User. | [optional] 
**participants** | **[Object]** | List of multiple Persons (participants) this Activity is associated with. If omitted, single participant from &#x60;person_id&#x60; field is used. It requires a structure as follows: &#x60;[{\&quot;person_id\&quot;:1,\&quot;primary_flag\&quot;:true}]&#x60; | [optional] 
**busyFlag** | **Boolean** | Set the Activity as &#39;Busy&#39; or &#39;Free&#39;. If the flag is set to &#x60;true&#x60;, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with &#x60;null&#x60;. When the value of the flag is unset (&#x60;null&#x60;), the flag defaults to &#39;Busy&#39; if it has a time set, and &#39;Free&#39; if it is an all-day event without specified time. | [optional] 
**attendees** | **[Object]** | Attendees of the Activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: &#x60;[{\&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}]&#x60; or &#x60;[{\&quot;person_id\&quot;:1, \&quot;email_address\&quot;:\&quot;mail@example.org\&quot;}]&#x60; | [optional] 
**done** | [**NumberBoolean**](NumberBoolean.md) | Whether the Activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done | [optional] 



## Enum: BusyFlagEnum


* `true` (value: `"true"`)

* `false` (value: `"false"`)



