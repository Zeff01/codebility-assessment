export interface AuthBody {
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  userSub: string | undefined;
  confirmed: boolean | undefined;
}

export interface LoginResponse {
  accessToken: string | undefined;
  idToken: string | undefined;
  refreshToken: string | undefined;
  expiresIn: number | undefined;
}

export interface AuthErrorResponse {
  error: string;
}
