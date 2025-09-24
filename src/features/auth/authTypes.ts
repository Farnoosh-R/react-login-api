export interface User {
    id: number;
    username: string;
    email: string;
}
export interface LoginResponse {
    id: number;
    username: string;
    email: string;
    accessToken: string;
}