import styled from 'styled-components'

export interface ButtonRowProps {
  title: string
  color: string
}
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Item1 = styled.div`
  flex: 1;
  order: 1;
`

export const Item2 = styled.div`
  flex: 1;
  order: 2;
`
export const Item3 = styled.div`
  flex: 1;
  order: 3;
`
