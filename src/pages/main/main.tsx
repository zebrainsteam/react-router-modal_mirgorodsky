import React from 'react'

import { Box } from '@grid'
import { H1, H2 } from "@typography";

import ZebraIllustrationPath from '@img/zebra.svg'
import {useSwitch} from "@shared/hooks";
import {PrimaryModal} from "@ui-kit/modal/primary";
import LidPath from '@img/lid.jpg'

export const MainPage = () => {
    const [isModalOpen, openModal, closeModal] = useSwitch(false)

    return (<Box    className='stretch-on-relative'
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
    >
        <img width='300px' src={ZebraIllustrationPath} alt="zebra"/>
        <H1 textAlign='center' color='quaternary' isPointer onClick={openModal} >Simple Modal box</H1>

        <PrimaryModal isOpen={isModalOpen} onClose={closeModal} >
            <img className='full-width y-offset-xl_top' src={LidPath} alt="lid"/>
            <H2 className='y-offset-md_top' textAlign='center' >А ты прошел общий опрос?</H2>
        </PrimaryModal>

    </Box>)

}