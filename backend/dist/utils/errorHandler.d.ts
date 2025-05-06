declare class ErrorHandler extends Error {
    statusCode: number;
    constructor(message: any, statusCode: number);
}
export default ErrorHandler;
