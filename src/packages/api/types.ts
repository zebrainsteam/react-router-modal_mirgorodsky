import {AxiosResponse} from "axios";

export type ApiResponseData<T> = T extends {
    data?: infer U,
    [key: string]: any
} ? U : undefined

export type ApiRequest = () => Promise<AxiosResponse>

export type ApiResponseHandler<T extends ApiRequest> = ((data: ApiResponseData<Awaited<ReturnType<T>>>) => any)