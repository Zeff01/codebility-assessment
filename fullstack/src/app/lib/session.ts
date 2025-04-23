import { SECRET_KEY } from "../../lib/secret";
import jwt from 'jsonwebtoken';
import { type CredentialsType } from "../../lib/types/login";
import { cookies } from 'next/headers'
import { cookieVariables } from "../../lib/api-helper/cookie-variable";

export function createSessionToken(payload: CredentialsType) {
    const expiresIn = '3h'; 
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn,
    });
  
    return token;
  }

export function verifySessionToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded as {
    username: string;
    password: string;
    role: string;
  };
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}

const getSession = async (variable:string) => {


  const sessionCookie = (await cookies()).get(variable);

  if (!sessionCookie) {
    return null;
  }

  const session = verifySessionToken(sessionCookie.value) as {
    username: string;
    password: string;
    role: string;
  }
  if(session){
    return session
  }else {
    return null
  }
}

export const getSessionUser = () => getSession(cookieVariables.user)