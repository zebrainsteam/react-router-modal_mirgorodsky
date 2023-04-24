import React from 'react'
import { Route, Link, useHistory } from "react-router-dom";

import {useGetParameter, usePrepareLink, useQuery} from '@hook'
import { Col, Container, Row } from '@grid'
import { Card1 as Card } from "@ui-kit/cards/card-1";
import { PrimaryModal } from "@ui-kit/modal/primary";
import { PrimarySpinner } from "@ui-kit/loading/spinner/primary";
import { PrimaryButton } from "@buttons/primary";
import { GET_ENUMS, GET_PARAMS } from "@src/app/components/get-parameter-popups/const";

import {getUser, getUsers} from "@api/rest/users"

export const UsersPage = () => {
    const userId = useGetParameter('id')

    const [data, isLoading] = useQuery({queryFn: getUsers()})
    const [userData, isUserDataLoading] = useQuery({queryFn: getUser({id: userId}), requestConditions: Boolean(userId), deps: [userId]})

    const history = useHistory();
    const userDataLink = usePrepareLink({
        to: "/data",
        isRelativePath: true
    });

    const signInLink = usePrepareLink({
        query: {
            [GET_PARAMS.popup]: GET_ENUMS.popup.signIn
        }
    });

    return <Container className='y-offset-md' >

        {isLoading ? <PrimarySpinner /> : <Row desktop={{ offsetX: 10, offsetY: 10 }} >
            {data.map((item, index) => (
                <Col mobileSize={12}
                     tabletSize={4}
                     desktopSize={3}
                     key={item.id}
                >
                    <Link to={`${userDataLink.pathname}?id=${item.id}`} >
                        <Card name={item.name} />
                    </Link>
                </Col>
            ))}
        </Row>}

        <Route
            path={userDataLink.pathname}
            children={({ match }) => {

                return (
                    <PrimaryModal onClose={history.goBack} isOpen={Boolean(match)}>
                        {isUserDataLoading ? <PrimarySpinner size='sm' alignX='center' /> : userData.name}
                    </PrimaryModal>
                );
            }}
        />

        <br/>
        <Link to={signInLink} >
            <PrimaryButton label='sign in' />
        </Link>


    </Container>
}