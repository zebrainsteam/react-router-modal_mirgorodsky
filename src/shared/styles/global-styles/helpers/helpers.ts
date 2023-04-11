import { css } from 'styled-components'
import { stretchBlockOnRelativeWrapper } from '@mixins'

export const Helpers = css`
  
  .stretch-on-relative {
   ${stretchBlockOnRelativeWrapper()}
  }
   
  .full-width {
     width: 100%;
  }

`
