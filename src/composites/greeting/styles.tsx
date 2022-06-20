import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex
  flex-direction: column;
  width:100%;
`

export const Heading = styled.div`
  display: flex;
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SubHeading = styled.div`
  flex: 1;
  order: 1;
  border: 1px solid black;
`

export const DateHeading = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
  order: 2;
  border: 1px solid black;
`
