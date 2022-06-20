import styled from 'styled-components'

export const RootContainer = styled.div`
  /* flex: 1 1 auto; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 16px 0px;
  border: 1px solid #d0d7e2;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;

  background-color: #fafbfc;
`

export const StyledAccountContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`
export const StyledTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #326295;
`
export const StyledSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  h2 {
    padding-right: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #192638;
  }
`

export const StyledDropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const StyledAccountTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #326295;
`

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    color: #326295;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    margin: 4px;
    border: 1px solid #1f5eb7;
    box-sizing: border-box;
    border-radius: 4px;
    color: #1f5eb7;
    background: #fafbfc;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
`
