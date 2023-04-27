import { makeRequest } from "./../../make-request"
import {UserRequest, UserResponse, UsersResponse} from './types'

export const getUsers = () => () => {
    return makeRequest<UsersResponse>({
        url: 'users'
    })
}

export const getUser = ({id}:UserRequest) => () => {
    return makeRequest<UserResponse, UserRequest>({
        url: `users/${id}`
    })
}