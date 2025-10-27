import { randomUUID } from "crypto";
import type { Credentials, Result, User, Role } from "./types";

export const login = async (creds: Credentials): Promise<Result<User>> => {
    const { username, password } = creds;

    if(password !== 'permitido'){
        return {
            ok: false,
            message: 'Credenciales inválidas'
        };
    }

    await new Promise<void>(r => setTimeout(r, 5000));

    const role: Role = username.startsWith('adm') ? 'admin' : username.startsWith('edit') ? 'editor' : 'viewer';

    const user: User = {
        id: randomUUID(),
        username,
        role
    };

    return {
        ok: true,
        data: user
    };
}

export const formatUser = (user: User): string => {
    return `[${user.role}] ${user.username} (${user.id})`;
}