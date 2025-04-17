import { todosArr } from "../todoarr";
export function getDateTimeNow() {

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const pst = new Date(utc - 8 * 60 * 60000);

    return pst.toISOString()
}

export function generateUUID(): String {
    while (true) {
        const uuid = crypto.randomUUID();
        const findUser = todosArr.find(obj => obj.id == uuid);
        if (typeof findUser === 'undefined') {
            return uuid
        }
    }
}