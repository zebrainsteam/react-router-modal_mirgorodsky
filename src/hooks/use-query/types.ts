
export interface UseQueryConfig<ResponseDataI, HandlerData> {
    deps?: any[],
    responseHandler?: (data: ResponseDataI) => HandlerData,
    queryFn?: any
    requestConditions?: boolean
}

export type UseQuery = <ResponseDataI = object, HandlerData = ResponseDataI>(params?: UseQueryConfig<ResponseDataI, HandlerData>) => [HandlerData | undefined, boolean, boolean, string]