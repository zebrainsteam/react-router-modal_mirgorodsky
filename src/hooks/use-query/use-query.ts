import { useEffect, useState } from 'react';
import {UseQuery} from './types'


export const useQuery:UseQuery = (props) => {
    const {
        deps = [],
        responseHandler,
        queryFn,
        requestConditions = true
    } = props || {}
    const [isFirstDataLoaded, setIsFirstDataLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [responseData, setResponseData] = useState();

    useEffect(() => {
        (async () => {

            if (requestConditions) {
                try {
                    setIsLoading(true);

                    const { data } = await queryFn()
                    let outputData = data;

                    if (responseHandler) {
                        outputData = await responseHandler(data);
                    }

                    setResponseData(outputData);
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

export type IUseQuery = typeof useQuery