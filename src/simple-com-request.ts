
export interface SimpleComRequest<T = any> {

    /**
     * 请求的id
     * 
     * @type {string}
     * @memberof SimpleComRequest
     */
    rid?: string,

    /**
     * 方法名称
     * 
     * @type {string}
     * @memberof SimpleComRequest
     */
    action?: string,

    /**
     * 模块名称
     * 
     * @type {string}
     * @memberof SimpleComRequest
     */
    service?: string,

    /**
     * 成功时包含的数据.
     * 
     * @type {T}
     * @memberof SimpleComModel
     */
    data?: T;
}