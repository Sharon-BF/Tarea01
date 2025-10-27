import { Result, User } from "./registerTypes";

export const validatePassword = (pass: string): Result<User> => {
    if(pass.length >= 6) {
        return {
            ok: true,
            message: 'Contraseña válida'
        };
    } else {
        return {
            ok: false,
            message: 'La contraseña debe tener al menos 6 caracteres'
        };
    }
}



