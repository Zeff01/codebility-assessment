import { Response } from 'express';

/**
 * Sets an error message to be receive by the client browser
 * @param res     Response object (from express)
 * @param message Message of the error
 * @param status  HTTP status
 * 
 * @example
 * errorResponse(res, 'An unknown error occurred', 500 );
 */
export default function errorResponse(res :Response, message :string, status :number = 404) :void {
  res.status(status).json({ error: message });
}
