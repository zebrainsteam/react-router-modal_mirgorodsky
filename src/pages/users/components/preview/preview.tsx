import React, {FC} from "react";

import {PreviewProps} from './types'
import {useGetParameter, useQuery} from "@hook";
import {getUser} from "@api/rest/users";
import {PrimarySpinner} from "@ui-kit/loading/spinner/primary";
import { Box } from "@grid";


import {FrameworkNavItem} from "./components/framework-nav-item"


import {frameworksParams} from "./const"
import {PrimaryButton} from "@buttons/primary";

export const Preview: FC<PreviewProps> = ({id}) => {
    const frameworkName = useGetParameter('framework');

    const [data, isLoading] = useQuery({
        queryFn: getUser({id}),
        requestConditions: id > 0,
        deps: [id]
    })

    return (<>
         {isLoading ? <PrimarySpinner size='sm' alignX='center' /> : <>
             {data?.name}

             <br/>
             <br/>

             <Box>
                 {frameworksParams.map(({title}) => (<FrameworkNavItem framework={title} />))}
             </Box>

             <br/>

             <PrimaryButton label='Сохранить' sizeMod='sm' />
         </>}
    </>)
}