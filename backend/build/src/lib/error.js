"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorResponse;
/**
 * Sets an error message to be receive by the client browser
 * @param res     Response object (from express)
 * @param message Message of the error
 * @param status  HTTP status
 *
 * @example
 * errorResponse(res, 'An unknown error occurred', 500 );
 */
function errorResponse(res, message, status = 404) {
    res.status(status).json({ error: message });
}
//# sourceMappingURL=error.js.map