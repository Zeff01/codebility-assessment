import { Role } from "../enum/role.enum";

export interface JwtUser {
  userId: string;
  email: string;
  role: Role;
}