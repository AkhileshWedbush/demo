import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

const BodyStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  #root {
    margin: 0 auto;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${BodyStyles}
`

export const MainPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5 1 auto;
  min-height: 100vh;
  background: rgb(165, 197, 249);
`

export const MainContentWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;

  color: black;
  background-color: #f0f2f5;
`

// export const MainContentHeader = styled.div`
//   flex: 10 10 auto;
//   width: 100%;
//   display: flex;
//   flex-direction: row;

//   color: black;
//   background-color: #f0f2f5;
//   background-color: #f0f;
// `
