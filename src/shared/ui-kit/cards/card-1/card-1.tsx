import React, { FC } from "react";

import { Text } from "@typography";

import { Card1Props } from "./types";

import AvatarPath from "@icons/user_1.svg";

import { Wrapper, AvatarWrapper, Avatar } from "./styles";

export const Card1: FC<Card1Props> = ({
                                          name,
                                          id,
                                          ...props
                                      }) => {
    return (
        <Wrapper {...props}>
            <AvatarWrapper>
                <Avatar src={AvatarPath} alt="avatar" />
            </AvatarWrapper>

            <Text textAlign="center">{name}</Text>
        </Wrapper>
    );
};
