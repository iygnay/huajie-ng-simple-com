/**
 * 用于表示简单通信的异常对象.
 * 
 * @export
 * @class SimpleComError
 * @extends {Error}
 */
export class SimpleComError extends Error {

    /**
     * ctr
     * 
     * @param {(string | { message: string })} raw 
     * @memberof SimpleComError
     */
    constructor(public raw: string | { message: string }) {
        super(typeof (raw) === 'string' ? raw : raw.message);
    }
}