import React, {FC} from "react";

import {FrameworkNavItemProps} from './types'
import {Link} from "react-router-dom";
import {Text} from "@typography";
import {useGetParameter, usePrepareLink} from "@hook";
import {GET_PARAMS} from "@app/components/get-parameter-popups/const";


export const FrameworkNavItem: FC<FrameworkNavItemProps> = ({framework}) => {
    const frameworkName = useGetParameter('framework');
    const [link] = usePrepareLink({
        query: {
            [GET_PARAMS.framework]: framework
        },
        keepOldQuery: true
    });
    const isActiveLink = frameworkName === framework


    return ( <Link to={link} replace >
        <Text isLink
              isActiveLink={isActiveLink}
              className='x-offset-sm'
        >
            {framework}
        </Text>
    </Link>)
}