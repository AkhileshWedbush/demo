import styled, { css } from 'styled-components'
import { Backgrounds } from '../../shared/styles'

export interface AnchorTagImageProps {
  title: string
  href: string
  icon?: string
  color: string
  fontSize: string
  fontWeight: number
}

export interface Visited {
  visited: boolean
}

export const StyledAnchor = styled.a<AnchorTagImageProps>`
  color: ${(props: AnchorTagImageProps) => props.color};
  ${({ visited }: Visited) =>
    visited &&
    css`
      color: gray;
    `}

  &:active {
    color: ${Backgrounds.Brand1};
  }

  &:link {
    color: ${Backgrounds.Primary50};
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
