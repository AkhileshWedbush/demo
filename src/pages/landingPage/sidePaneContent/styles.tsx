import styled from 'styled-components'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: #374253;
  height: 100%;
  padding: 16px 16px 16px 32px;
  /* background-color: goldenrod; */
`

export const StyledLogoContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  padding-top: 24px;
  padding-bottom: 24px;
  margin-left: -8px;
`

export const StyledMenuListContainer = styled.div`
  flex: 1 1 100%;
  /* min-height: 85%; */
  // background-color: teal;
`

export const StyledBottomContainer = styled.div`
  flex: 0 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
  // background-color: blue;
`
