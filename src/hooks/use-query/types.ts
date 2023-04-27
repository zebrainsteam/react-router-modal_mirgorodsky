import { ApiRequest } from "@api/types"


export interface UseQueryProps<QueryFn extends ApiRequest
    // , ResponseHandler extends ApiResponseHandler<QueryFn> | undefined
    > {
    deps?: any[],
    queryFn: QueryFn,
    // responseHandler?: ResponseHandler
    requestConditions?: boolean
}

export type AxiosData<T> = T extends {
    data?: infer U,
    [key: string]: any
} ? U : undefined

export type UseQueryResult<T extends ApiRequest> = [AxiosData<Awaited<ReturnType<T>>> | undefined, boolean, boolean, string]