import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
// import { Colors, Typography } from './styles'

export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'

export const bodyStyles = css`
  /* Same as before */
`

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    ${bodyStyles}
  }
 `
