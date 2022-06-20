import { FC } from 'react'
import StyledHeader from './styles'

interface childProps {
  children: React.ReactElement
}

const HeaderLayout: FC<childProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}

export default HeaderLayout
