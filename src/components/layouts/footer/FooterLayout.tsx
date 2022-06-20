import { FC } from 'react'
import StyledFooter from './styles'

interface childProps {
  children: React.ReactElement
}

const FooterLayout: FC<childProps> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>
}

export default FooterLayout
