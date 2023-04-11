import {storage} from "@storage"

const headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
};

const baseURL = process.env.NODE_ENV === 'production'
        ? process.env.API_URL_PROD
        : 'http://localhost:3007/api/';

export const config = {
    accessToken: storage.getItem('accessToken'),
    refreshToken: storage.getItem('refresh'),
    commonRequestConfig: {
        baseURL,
        headers: headers,
        withCredentials: true,
    }
};
