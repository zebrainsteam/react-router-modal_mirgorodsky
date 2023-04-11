import React, {useEffect, useState, Component} from "react";
import { useHistory } from "react-router-dom";
import { PrimaryModal } from '@ui-kit/modal/primary'

const withMountAnimation = (Component) => {

    return function (props) {
        const { isOpened, ...otherProps } = props
        const [isMounted, setIsMounted] = useState(false)
        const isVisible = isOpened && isMounted

        useEffect(() => {

            if (!isMounted) {
                setTimeout(() => {
                    setIsMounted(true)
                }, 50)
            }

        }, [])



        return <Component isOpen={isVisible} {...otherProps} />
    }




};



export const SignIn = withMountAnimation(({ isOpen }) => {
    const history = useHistory()

    return (
        <PrimaryModal
            isOpen={isOpen}
            onClose={history.goBack}
        >
            Login please
        </PrimaryModal>
    );
});

