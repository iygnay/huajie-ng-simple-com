/**
 * 简单通信模型.
 * 
 * 这是一个简单的协议, 规则是:
 * 
 * 1) 假如`error`属性不为`undefined`和`null`, 就视为通信失败(出现错误).
 * 2) 否则就表示通信成功, `data`属性包含传递的数据.
 * 
 * @export
 * @interface SimpleComResponse
 * @template T 
 * @template any 
 */
export interface SimpleComResponse<T = any> {

    /**
     * 请求id
     * 
     * @type {string}
     * @memberof SimpleComResponse
     */
    rid?: string;

    /**
     * 方法名称.
     * 
     * @type {string}
     * @memberof SimpleComResponse
     */
    action?: string;

    /**
     * 模块名称
     * 
     * @type {string}
     * @memberof SimpleComRequest
     */
    service?: string,

    /**
     * 错误消息.
     * 
     * @type {(string | {
     *         message: string,
     *     })}
     * @memberof SimpleComModel
     */
    error?: string | {
        message: string,
        [key: string]: any,
    }

    /**
     * 成功时包含的数据.
     * 
     * @type {T}
     * @memberof SimpleComModel
     */
    data?: T,
}