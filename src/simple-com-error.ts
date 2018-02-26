import { SimpleComRequest } from './simple-com-request';

/**
 * 用于表示简单通信的异常对象.
 * 
 * @export
 * @class SimpleComError
 */
export class SimpleComError {
    message: string;
    request: SimpleComRequest;

    /**
     * ctr
     * 
     * @param {(string | { message: string })} raw 
     * @memberof SimpleComError
     */
    constructor(public raw: string | { message: string }, req: SimpleComRequest) {
        this.message = typeof (raw) === 'string' ? raw : raw.message;
        this.request = req;
    }
}