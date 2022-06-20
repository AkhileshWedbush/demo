import styled from 'styled-components'

import { Icons } from '../../shared/GlobalStyle'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`

export const StyledImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 8px; */
  min-height: 100%;
  /* background-color: salmon; */
  background-image: url(${Icons.ArtBoard});
  background-repeat: no-repeat;
  padding: 84px;
  h2 {
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 72px;
    text-align: left;
    color: #ffffff;
    /* background-color: orange; */
    margin-bottom: 8px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 48px;
    /* background-color: orange; */
    margin-top: 8px;
    color: #ffffff;
  }
`

export const StyledContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  padding: 8px 16px;
  margin: 214px 24px;

  img {
    margin-bottom: 24px;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #181e27;
    text-align: left;
    width: 100%;
    margin-left: 72px;
  }
`

export const StyledFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  /* width: 100%; */
  padding: 8px 12px;
  margin: 8px 24px;

  /* background-color: salmon; */

  input {
    margin: 0px 0px 16px 0px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #d0d7e2;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 12px 16px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #374253;
  }

  button {
    width: 100%;
    height: 40px;
    left: 0px;
    top: 0px;

    background: #1f5eb7;
    border-radius: 4px;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
  }
`
