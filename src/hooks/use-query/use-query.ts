import {useEffect, useState} from 'react';
import { ApiRequest } from "@api/types"
import { UseQueryProps, UseQueryResult} from './types'


export const useQuery = <
    T extends ApiRequest
>({
                                                                 deps = [],
                                                                 queryFn,
                                                                 requestConditions = true
                                                             }:
                              UseQueryProps<T>): UseQueryResult<T> =>
{
    const [isFirstDataLoaded, setIsFirstDataLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [responseData, setResponseData] = useState();

    useEffect(() => {
        (async () => {

            if (requestConditions) {
                try {
                    setIsLoading(true);

                    const {data} = await queryFn()

                    setResponseData(data);
                    setIsLoading(false);
                    if (!isFirstDataLoaded) {
                        setIsFirstDataLoaded(true);
                    }
                } catch (e) {
                    setIsLoading(false);
                    setError(e);
                }
            }


        })();
    }, deps);

    return [responseData, isLoading, isFirstDataLoaded, error];
};