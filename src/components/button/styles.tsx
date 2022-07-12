
import styled from 'styled-components'
import { css } from 'styled-components'

export interface ButtonProps {
  bgColor: string
  color: string
  disabled?:boolean
  title?: string
  borderColor?: string
  height?: string
  padding?: string
  borderRadius?: string
  icon?: string
  hover?: boolean
  width?: string
  image?: string
  onClick?: () => void
}

export const StyledButton = styled.button<ButtonProps>`
  background: ${(ButtonProps: ButtonProps) => ButtonProps.bgColor};
  color: ${(ButtonProps: ButtonProps) => ButtonProps.color};
  border: 1px solid
    ${(ButtonProps: ButtonProps) =>
      ButtonProps.borderColor ? ButtonProps.borderColor : 'none'};
  height: ${(ButtonProps: ButtonProps) => ButtonProps.height};
  width: ${(ButtonProps: ButtonProps) => ButtonProps.width};
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
  padding: ${(ButtonProps: ButtonProps) => ButtonProps.padding};
  &:disabled {
    cursor: no-drop;
  }
  ${(ButtonProps: ButtonProps) =>
    ButtonProps.hover &&
    css`
      &:hover {
        background-color: gray;
      }
    `};
`
