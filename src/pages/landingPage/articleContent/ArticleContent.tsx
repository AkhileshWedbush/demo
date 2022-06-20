import StyledTitleWrapper from './styles'
import AccountsWidget from '../../../widgets/accountsWidget/AccountsWidgets'

const ArticleContent = () => {
  return (
    <>
      <StyledTitleWrapper>Your Wedbush Accounts</StyledTitleWrapper>
      <AccountsWidget />
      <AccountsWidget />
    </>
  )
}

export default ArticleContent
