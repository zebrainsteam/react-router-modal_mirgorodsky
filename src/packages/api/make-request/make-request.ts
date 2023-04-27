import axios, {AxiosResponse} from 'axios'
import {config} from "./../congif"

import { MakeRequestProps } from './types'


export const makeRequest = <T, P extends object = {}>({url, method = 'get', params = {}, data, headers = {}}:MakeRequestProps<P>):Promise<AxiosResponse<T, P>> => {
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