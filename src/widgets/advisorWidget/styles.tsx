import styled from 'styled-components'

export const RootContainer = styled.div`
  /* flex: 1 1 auto; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  margin: 8px 8px 8px 16px;
  background: #fafbfc;
  border: 1px solid #d0d7e2;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  background-color: #fafbfc;
  color: #192638;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #192638;
  }
`

export const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background: url(.jpg);
  border-radius: 1000px;
`

export const StyledPanel = styled.div`
  /* flex: 1 1 auto; */
  /* flex: 1; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  /* background-color: salmon; */
`

export const StyledItemNameValueWrapper = styled.div`
  flex: 2 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-left: 16px;

  /* background-color: green; */

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #596579;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #192638;
  }
`
