import { createGlobalStyle } from 'styled-components'
import { Fonts } from './fonts'
import { Normalizations } from './normalizations'
import { Offsets } from './offsets'
import { Helpers } from './helpers'


export const GlobalStyles = createGlobalStyle`
    ${Fonts};
    ${Normalizations};
    ${Offsets};
    ${Helpers};

    
    #root {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
`
