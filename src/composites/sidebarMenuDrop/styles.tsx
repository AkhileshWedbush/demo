import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../shared/styles'

interface RouteTitles {
  routeTitle: string
  openAtNewTab: boolean
}

export interface SidebarDropProps {
  bgColor?: string
  label: string
  color?: string
  icon: string
  isMenuOpen?: boolean
  hasSubMenu?: boolean
  alt: string
  items?: RouteTitles[]
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: pointer;
  margin: 1rem 0rem 0rem 0rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  color: ${Colors.Primary50};

  &:hover {
    background-color: ${Colors. Primary80};
    color: ${Colors.White};
  }
`

export const StyledLabel = styled.div`
  order: 1;
  flex-grow: 1;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  order: 0;
  flex-grow: 0;
`

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  order: 2;
  flex-grow: 0;
  padding-right: 0.5rem;
  color: inherit;
`

export const StyledDropdownLinks = styled.div``

export const DropdownLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: arrow;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.5rem 0rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  text-decoration: none;
  color: ${Colors.Primary50};

  &:hover {
    background-color: ${Colors.Gray10};
  }

  &:active {
    background-color: ${Colors.Primary50}
    color: ${Colors.White}
  }
`
