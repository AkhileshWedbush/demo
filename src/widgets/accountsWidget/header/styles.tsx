import styled from 'styled-components'

export const RootContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  color: #ffffff;
  background: #1f5eb7;
  border-radius: 8px 8px 0px 0px;
`

export const StyledItemGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  img {
    margin-left: 24px;
  }
`
