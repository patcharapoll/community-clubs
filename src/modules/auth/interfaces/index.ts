export interface LoginRequest {
    username: string,
    password: string,
    client_id: string,
}

export interface LoginResponse {
    ok: boolean,
    message: string,
    token: string,
    expires_id: string,
    refresh_token: string,
    tokenType: string,
}