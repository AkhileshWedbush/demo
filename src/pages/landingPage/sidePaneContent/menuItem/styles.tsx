import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Colors } from './../../../../shared/styles';

interface Props {
  hasSubMenu?: boolean
}

export const RootContainer = styled.div<Props>`
  /* flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: ${(props: Props) =>
    props.hasSubMenu ? Colors.Primary50 : Colors.White};
  color: ${(props: Props) => (props.hasSubMenu ? Colors.White : Colors.Primary50)};
`

export const SubmenuContainer = styled(RootContainer)`
  background-color: blue;
`

export const MenuImageWrapper = styled.div`
  /* margin-right: 16px; */
`

export const MenuNameWrapper = styled.div`
  /* display: none; */
  margin-left: 16px;
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