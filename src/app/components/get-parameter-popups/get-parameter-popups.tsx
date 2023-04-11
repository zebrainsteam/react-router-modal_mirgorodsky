import React from "react";
import { useGetPopupState } from "./hooks/use-get-popup-state";
import { popups } from './const'

export const GetParameterPopups = () => {
    const { mountedPopupName, isOpened } = useGetPopupState();
    const Component = popups[mountedPopupName];

    if (!Component) {
        return null;
    }

    return <Component isOpened={isOpened} />;
}