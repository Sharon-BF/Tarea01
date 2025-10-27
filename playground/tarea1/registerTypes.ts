export type Role = 'admin' | 'editor' | 'viewer';

export interface Register {
    username: string;
    password: string;
    confirmPassword: string;
    role: Role;
}

export interface User {
    id: string;
    username: string;
    role: Role;
    password: string;
    email: string;
}

export interface Result<T>{
    ok: boolean;
    data?: T;
    message?: string;
}