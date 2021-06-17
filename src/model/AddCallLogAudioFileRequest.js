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
 * The AddCallLogAudioFileRequest model module.
 * @module model/AddCallLogAudioFileRequest
 * @version 1.0.0
 */
class AddCallLogAudioFileRequest {
    /**
     * Constructs a new <code>AddCallLogAudioFileRequest</code>.
     * @alias module:model/AddCallLogAudioFileRequest
     * @param file {File} Audio file supported by the HTML5 specification
     */
    constructor(file) { 
        
        AddCallLogAudioFileRequest.initialize(this, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, file) { 
        obj['file'] = file;
    }

    /**
     * Constructs a <code>AddCallLogAudioFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddCallLogAudioFileRequest} obj Optional instance to populate.
     * @return {module:model/AddCallLogAudioFileRequest} The populated <code>AddCallLogAudioFileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddCallLogAudioFileRequest();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);

                delete data['file'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Audio file supported by the HTML5 specification
 * @member {File} file
 */
AddCallLogAudioFileRequest.prototype['file'] = undefined;






export default AddCallLogAudioFileRequest;
