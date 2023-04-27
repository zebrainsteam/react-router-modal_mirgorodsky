export interface UserRequest {
    id: number
}

export interface UserResponse {
    id: number
    name: string
}

export type UsersResponse = UserResponse[]
