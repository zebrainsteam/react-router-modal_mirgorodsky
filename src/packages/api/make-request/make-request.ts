import axios from 'axios'
import {config} from "./../congif"

import { MakeRequest } from './types'


export const makeRequest: MakeRequest = ({url, method = 'get', params = {}, data = {}, headers = {}}) => {
    const instance = axios.create(config.commonRequestConfig);

    instance.interceptors.request.use(
        (requestConfig) => {

            if (config) {
                requestConfig.headers.authorization = `Bearer ${config.accessToken}`;
            }

            return requestConfig;
        },
        (error) => {
            return error;
        }
    );

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (
                error.response.status === 401
            ) {
                //logout
            }

            return Promise.reject(error);
        }
    );

    return instance({url, method, headers, params, data})
}