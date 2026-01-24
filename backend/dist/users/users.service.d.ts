export interface User {
    email: string;
    password: string;
}
export declare class UsersService {
    private users;
    findByEmail(email: string): User | undefined;
    create(user: User): void;
}
