# Pipedrive.BaseMailThread

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the mail thread | [optional] 
**accountId** | **String** | The connection account ID | [optional] 
**userId** | **Number** | ID of the user whom mail message will be assigned to | [optional] 
**subject** | **String** | The subject | [optional] 
**snippet** | **String** | A snippet | [optional] 
**readFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is read | [optional] 
**mailTrackingStatus** | **String** | Mail tracking status | [optional] 
**hasAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has an attachment | [optional] 
**hasInlineAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has inline attachments | [optional] 
**hasRealAttachmentsFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has real attachments (which are not inline) | [optional] 
**deletedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is deleted | [optional] 
**syncedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is synced | [optional] 
**smartBccFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether one of the parties of the mail thread is Bcc | [optional] 
**mailLinkTrackingEnabledFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the link tracking of the mail thread is enabled | [optional] 
**writeFlag** | **Boolean** | We strongly advise you to avoid the use of this property. We will soon deprecate this property | [optional] 
**parties** | [**BaseMailThreadAllOfParties**](BaseMailThreadAllOfParties.md) |  | [optional] 
**draftsParties** | **[Object]** | Parties of the drafted mail thread | [optional] 
**folders** | **[String]** | Folders in which messages from thread are being stored | [optional] 
**version** | **Number** | Version | [optional] 
**snippetDraft** | **String** | A snippet from a draft | [optional] 
**snippetSent** | **String** | A snippet from a message sent | [optional] 
**messageCount** | **Number** | An amount of messages | [optional] 
**hasDraftFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has any drafts | [optional] 
**hasSentFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has messages sent | [optional] 
**archivedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is archived | [optional] 
**sharedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is shared | [optional] 
**externalDeletedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has been deleted externally | [optional] 
**firstMessageToMeFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread was initialized by others | [optional] 
**lastMessageTimestamp** | **Date** | Last message timestamp | [optional] 
**firstMessageTimestamp** | **Date** | The time when the mail thread has had the first message received or created | [optional] 
**lastMessageSentTimestamp** | **Date** | The last time when the mail thread has had a message sent | [optional] 
**lastMessageReceivedTimestamp** | **Date** | The last time when the mail thread has had a message received | [optional] 
**addTime** | **Date** | The time when the mail thread was inserted to database | [optional] 
**updateTime** | **Date** | The time when the mail thread was updated in database received | [optional] 
**dealId** | **Number** | The ID of the deal | [optional] 
**dealStatus** | **String** | Status of the deal | [optional] 
**leadId** | **String** | The ID of the lead | [optional] 
**allMessagesSentFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether all the mail thread messages have been sent | [optional] 

