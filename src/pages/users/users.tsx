import React  from 'react'
import { Route, Link } from "react-router-dom";

import { usePrepareLink, useQuery } from '@hook'
import { Col, Container, Row } from '@grid'
import { Card1 as Card } from "@ui-kit/cards/card-1";
import { PrimaryModal } from "@ui-kit/modal/primary";
import { PrimarySpinner } from "@ui-kit/loading/spinner/primary";
import { PrimaryButton } from "@buttons/primary";
import { GET_ENUMS, GET_PARAMS } from "@src/app/components/get-parameter-popups/const";
import { Position } from './components/position'


import { getUsers } from "@api/rest/users"

export const UsersPage = () => {
    const [data, isLoading] = useQuery({
        queryFn: getUsers()
    })

    const [userDataLink, closeUserModal] = usePrepareLink({
        to: "/position",
        isRelativePath: true
    });



    const [signInLink] = usePrepareLink({
        query: {
            [GET_PARAMS.popup]: GET_ENUMS.popup.signIn
        }
    });

    return <Container className='y-offset-md' >

        {isLoading ? <PrimarySpinner /> : <Row desktop={{ offsetX: 10, offsetY: 10 }} >
            {data && data.map((item) => (
                <Col mobileSize={12}
                     tabletSize={4}
                     desktopSize={3}
                     key={item.id}
                >
                    <Link to={`/user/${item.id}`} >
                            <Card name={item.name} >
                                <Link to={`${userDataLink.pathname}/${item.id}`} >
                                    <PrimaryButton label='Должность' sizeMod='sm' className='full-width' />
                                </Link>
                            </Card>
                    </Link>
                </Col>
            ))}
        </Row>}

        <Route
            path={`${userDataLink.pathname}/:id`}
            children={({ match }) => {
                const userId = Number(match?.params.id)

                return (
                    <PrimaryModal onClose={closeUserModal} isOpen={Boolean(match)}>
                        <Position id={userId} />
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