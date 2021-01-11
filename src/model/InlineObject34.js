/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject34 model module.
 * @module model/InlineObject34
 * @version 1.0.0
 */
class InlineObject34 {
    /**
     * Constructs a new <code>InlineObject34</code>.
     * @alias module:model/InlineObject34
     * @param subscriptionUrl {String} A full, valid, publicly accessible URL. Determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the subscription_url.
     * @param eventAction {module:model/InlineObject34.EventActionEnum} Type of action to receive notifications about. Wildcard will match all supported actions.
     * @param eventObject {module:model/InlineObject34.EventObjectEnum} Type of object to receive notifications about. Wildcard will match all supported objects.
     */
    constructor(subscriptionUrl, eventAction, eventObject) { 
        
        InlineObject34.initialize(this, subscriptionUrl, eventAction, eventObject);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subscriptionUrl, eventAction, eventObject) { 
        obj['subscription_url'] = subscriptionUrl;
        obj['event_action'] = eventAction;
        obj['event_object'] = eventObject;
    }

    /**
     * Constructs a <code>InlineObject34</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject34} obj Optional instance to populate.
     * @return {module:model/InlineObject34} The populated <code>InlineObject34</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject34();

            if (data.hasOwnProperty('subscription_url')) {
                obj['subscription_url'] = ApiClient.convertToType(data['subscription_url'], 'String');
            }
            if (data.hasOwnProperty('event_action')) {
                obj['event_action'] = ApiClient.convertToType(data['event_action'], 'String');
            }
            if (data.hasOwnProperty('event_object')) {
                obj['event_object'] = ApiClient.convertToType(data['event_object'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('http_auth_user')) {
                obj['http_auth_user'] = ApiClient.convertToType(data['http_auth_user'], 'String');
            }
            if (data.hasOwnProperty('http_auth_password')) {
                obj['http_auth_password'] = ApiClient.convertToType(data['http_auth_password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A full, valid, publicly accessible URL. Determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the subscription_url.
 * @member {String} subscription_url
 */
InlineObject34.prototype['subscription_url'] = undefined;

/**
 * Type of action to receive notifications about. Wildcard will match all supported actions.
 * @member {module:model/InlineObject34.EventActionEnum} event_action
 */
InlineObject34.prototype['event_action'] = undefined;

/**
 * Type of object to receive notifications about. Wildcard will match all supported objects.
 * @member {module:model/InlineObject34.EventObjectEnum} event_object
 */
InlineObject34.prototype['event_object'] = undefined;

/**
 * The ID of the user this webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user's events — rather, this specifies the user's permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used.
 * @member {Number} user_id
 */
InlineObject34.prototype['user_id'] = undefined;

/**
 * HTTP basic auth username of the subscription URL endpoint (if required).
 * @member {String} http_auth_user
 */
InlineObject34.prototype['http_auth_user'] = undefined;

/**
 * HTTP basic auth password of the subscription URL endpoint (if required).
 * @member {String} http_auth_password
 */
InlineObject34.prototype['http_auth_password'] = undefined;





/**
 * Allowed values for the <code>event_action</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject34['EventActionEnum'] = {

    /**
     * value: "added"
     * @const
     */
    "added": "added",

    /**
     * value: "updated"
     * @const
     */
    "updated": "updated",

    /**
     * value: "merged"
     * @const
     */
    "merged": "merged",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "*"
     * @const
     */
    "STAR": "*"
};


/**
 * Allowed values for the <code>event_object</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject34['EventObjectEnum'] = {

    /**
     * value: "activity"
     * @const
     */
    "activity": "activity",

    /**
     * value: "activityType"
     * @const
     */
    "activityType": "activityType",

    /**
     * value: "deal"
     * @const
     */
    "deal": "deal",

    /**
     * value: "note"
     * @const
     */
    "note": "note",

    /**
     * value: "organization"
     * @const
     */
    "organization": "organization",

    /**
     * value: "person"
     * @const
     */
    "person": "person",

    /**
     * value: "pipeline"
     * @const
     */
    "pipeline": "pipeline",

    /**
     * value: "product"
     * @const
     */
    "product": "product",

    /**
     * value: "stage"
     * @const
     */
    "stage": "stage",

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "*"
     * @const
     */
    "STAR": "*"
};



export default InlineObject34;
