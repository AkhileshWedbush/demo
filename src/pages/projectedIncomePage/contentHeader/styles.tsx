import styled from 'styled-components'

export const StyledContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 24px 4px 24px;
  color: #181e27;
  background-color: #f0f2f5;

  h2 {
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 48px;

    color: #01155f;
    /* background-color: green; */
  }
`

export const StyledButtonRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const StyledLinkButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
