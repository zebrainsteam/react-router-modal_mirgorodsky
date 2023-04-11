import React, {FC, useEffect, useState} from "react";
import { Overlay, Wrapper } from "./styles";

import { OverlayingModalProps } from './types'

export const OverlayingModal: FC<OverlayingModalProps> = ({ children, onClose, isOpen }) => {

    return (
        <Wrapper isVisible={isOpen} >
            <Overlay onClick={onClose} />
            {children}
        </Wrapper>
    )
}
