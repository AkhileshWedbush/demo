import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../shared/styles'

export interface SidebarMenuListItemsProps {
  label: string
  icon: string
  isMenuOpen?: boolean
  alt: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: #ffffff;
  color: #374253;
  cursor: pointer;
  margin: 1rem 0rem 0rem 0rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  color: ${Colors.Primary50};

  &:hover {
    background-color: ${Colors.Gray10};
  }
`

export const StyledLabel = styled.div`
  overflow: hidden;
  letter-spacing: 0.02em;
  order: 1;
  flex-grow: 1;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: inherit;
`

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    background-color: ${Colors.Gray10};
  }

  &:active {
    background-color: ${Colors.Primary50}
    color: ${Colors.White}
  }
`
