export interface CheckClientIdRequest {
    id: string,
    secret: string,
}

export interface CheckDuplicateUser {
    username: string,
    client_id: string,
}