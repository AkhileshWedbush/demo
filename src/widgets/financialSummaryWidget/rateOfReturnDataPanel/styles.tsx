import styled from 'styled-components'

export const RootContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 8px 16px; */

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  p {
    font-weight: 400;
    font-size: 21px;
    line-height: 24px;
    color: #192638;
  }
`

export const StyledGainPart = styled.h2`
  color: #c72f24;
`

export const StyledLossPart = styled.h2`
  color: #22c373;
`
