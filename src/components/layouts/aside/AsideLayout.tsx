import { FC } from 'react'
import StyledAside from './styles'

interface childProps {
  children: React.ReactElement
}

const AsideLayout: FC<childProps> = ({ children }) => {
  return <StyledAside>{children}</StyledAside>
}

export default AsideLayout
