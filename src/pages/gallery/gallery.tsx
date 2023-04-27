import React from 'react'
import { Link } from "react-router-dom";
import { usePrepareLink } from '@hook'
import {Col, Container, Row} from '@grid'
import { Card1 as Card } from "@ui-kit/cards/card-1";
import { PrimaryButton } from "@buttons/primary";
import {GET_PARAMS, GET_ENUMS} from '@src/app/components/get-parameter-popups/const'

export const GalleryPage = () => {
    const [signInLink] = usePrepareLink({
        query: {
            [GET_PARAMS.popup]: GET_ENUMS.popup.signIn
        }
    });

    return <Container className='y-offset-md' >
        <Row desktop={{ offsetX: 10, offsetY: 10 }} >
            {[0, 1, 2, 3].map((item, index) => (
                <Col mobileSize={12}
                     tabletSize={4}
                     desktopSize={3}
                     key={item}
                >
                        <Card name={`photo ${index + 1}`} />
                </Col>
            ))}
        </Row>
        <br/>
        <Link to={signInLink} >
            <PrimaryButton label='sign in' />
        </Link>
    </Container>
}