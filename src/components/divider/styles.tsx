import styled, { css } from 'styled-components'

export interface DividerProps {
  bgColor?: string
  horizontal?: boolean
  thickness: string
}

export const DividerLine = styled.div<DividerProps>`
  ${({ horizontal, thickness, bgColor }: DividerProps) =>
    horizontal
      ? css`
          width: 100%;
          height: ${thickness};
          background-color: ${bgColor};
        `
      : css`
          width: ${thickness};
          height: 100vh;
          background-color: ${bgColor};
          margin: 0px;
          padding: 0px;
        `}
`
