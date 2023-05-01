import React from 'react'
import styled, {css} from 'styled-components'
import {sizeList, weightList} from "./const"
import { TextProps } from './types'

export const Text = styled.p<TextProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ weight = 'regular' }) => weightList[weight]};
    color: ${({ color = 'primary', theme }) => theme.palette.fonts[color]};
    text-align: ${({ textAlign = 'left' }) => textAlign};
  
    cursor: ${({ isPointer = false }) => (isPointer ? 'pointer' : 'auto')};
  
    ${({ isLink, isActiveLink }) => isLink && css`  
      position: relative;
      cursor: pointer;
      text-decoration: none;
      
          &:before {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: ${isActiveLink ? '2px' : '1px'};
            background-color: ${({ theme }) => theme.palette.fonts.quaternary};
            opacity: ${isActiveLink ? '1' : '0.5'};
          }
    `}

    ${({ size = 'md' }) => sizeList[size]};
`
