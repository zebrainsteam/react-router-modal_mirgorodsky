import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Box } from "@grid";
import { routes } from '@routes'
import { Wrapper, AuthBtn, Logo } from "./styles";

import { Text } from '@typography'

import LogoPath from "@icons/logo.svg";
import ProfileIconPath from "@icons/profile.svg";


export const Header: FC = () => {
    const {pathname: currentRoute} = useLocation();

    return (
        <Wrapper>
            <Container>
                <Box justifyContent="space-between" alignItems="center">

                    <Box alignItems='center' >
                        <Link to={"/"}>
                            <Logo src={LogoPath} alt="logo" />
                        </Link>

                        <Box className='x-offset-md' >
                            {routes.filter(({isHeaderNavItem}) => (isHeaderNavItem)).map(({path, navTitle}, index) => {
                                const isActiveLink = currentRoute === '/' && path === '/' || path !== '/' && currentRoute.startsWith(path)

                                return (<Link to={path} key={path} >
                                    <Text isLink
                                          isActiveLink={isActiveLink}
                                          className='x-offset-sm'
                                    >
                                        {navTitle}
                                    </Text>
                                </Link>)
                            })}
                        </Box>
                    </Box>



                    <Box alignItems="center" >
                        <AuthBtn src={ProfileIconPath} />
                    </Box>

                </Box>
            </Container>
        </Wrapper>)
};
