import styled from 'styled-components'

export interface ButtonProps {
  bgColor: string
  color: string
  title?: string
  borderColor?: string
  height?: string
  padding?: string
  borderRadius?: string
  icon?: string
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
`
