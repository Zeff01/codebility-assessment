import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../secret';

export const cookieVariables = {
    user : 'session-token',
}

export const userToken = (tokenHeader: string) => {
    const token = tokenHeader.split(' ')[1];
    let user = null;
    if(token){
        jwt.verify(token,`${SECRET_KEY}`, async (err: any, decoded: any) => {
            if(err) return null;
            user = {
                id : decoded.id,
                username :decoded.username,
                email : decoded.email
            }
        })
    }
    return user;
}