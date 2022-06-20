import { FC } from 'react'
import StyledArticle from './styles'

interface childProps {
  children: React.ReactElement
}

const ArticleLayout: FC<childProps> = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>
}

export default ArticleLayout
