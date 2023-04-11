import { ReactNode } from 'react'

export interface OverlayingModalProps {
    onClose?: () => void,
    isOpen?: boolean,
    children?: ReactNode
}

export interface WrapperProps {
    isVisible?: boolean
}

