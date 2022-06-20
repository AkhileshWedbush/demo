import styled from 'styled-components'

export interface ButtonGroupProps {
  backgroundColor?: string
  order?: number
}

export const Wrapper = styled.div<ButtonGroupProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  width: fit-content;
`

export const ButtonWrapper = styled.div<ButtonGroupProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  flex: none;
  order: ${(props: any) => props.order};
  flex-grow: 0;
  margin: 0rem 0.5rem 0rem 0rem;
`
