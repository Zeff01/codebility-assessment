import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface RequestWithUser extends Request {
  user?: string | JwtPayload;
}
