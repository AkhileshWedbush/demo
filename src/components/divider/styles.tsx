import styled, { css } from 'styled-components'

export interface DividerProps {
  borderColor: string
  horizontal: boolean
  borderHeight: string
}

export const DividerLine = styled.div<DividerProps>`
  ${({ horizontal }: DividerProps) =>
    horizontal
      ? css`
          border-bottom: ${(props: DividerProps) => props.borderHeight} solid
            ${(props: DividerProps) => props.borderColor};
        `
      : css`
          border-left: ${(props: DividerProps) => props.borderHeight} solid
            ${(props: DividerProps) => props.borderColor};
        `}
`
