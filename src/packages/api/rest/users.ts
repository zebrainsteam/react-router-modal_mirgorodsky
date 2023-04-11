import { makeRequest } from "./../make-request"

export const getUsers = () => () => {
    return makeRequest({
        url: 'users'
    })
}

export const getUser = ({id}) => () => {
    return makeRequest({
        url: `users/${id}`
    })
}