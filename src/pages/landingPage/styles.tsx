import styled from 'styled-components'

export const LandingPageLayout = styled.div`
  background-color: #f0f2f5;
  width:100%;
`
export const ClientGreetingsPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 24px 4px 24px;
  color: #181e27;

  h2 {
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 48px;

    color: #01155f;
    /* background-color: salmon; */
  }
`

export const StyledItemGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    flex: 1;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #181e27;
  }

  p {
    flex: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #596579;
  }
`
