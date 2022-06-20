import styled from 'styled-components'

export const RootContainer = styled.div`
  margin: 8px 0px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: orange; */
`

export const StyledPanelHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #1f5eb7;
  border-radius: 8px 8px 0px 0px;

  color: #ffffff;
  padding: 8px 24px;
`

export const StyledPanelHeadTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: left;
`

export const StyledPanelHeadTotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: right;
`

export const StyledTableContainer = styled.div`
  width: 100%;
  padding: 24px;
  background: #fcfdff;

  border: 1px solid #d0d7e2;
  box-sizing: border-box;

  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 0px 0px 0px 0px;
`
