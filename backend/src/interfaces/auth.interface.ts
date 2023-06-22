export interface AuthInputs {
    username: string,
    password: string
}

export interface User extends AuthInputs {
    id: string
}   