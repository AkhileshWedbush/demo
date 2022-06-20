import { StyledLink, StyledLinkWrapper } from './styles'
import { LinkButtonItem, LinkButtonItemList } from './LinkButtonData'

const anchorClickHandler = () => {
  console.log('the link is clicked')
}

export const LinkButtons = () => {
  return (
    <>
      {LinkButtonItemList.map((item: LinkButtonItem) => {
        return (
          <StyledLinkWrapper key={item.id}>
            <img src={item.src} alt={item.alt} />
            <StyledLink onClick={anchorClickHandler}>{item.name}</StyledLink>
          </StyledLinkWrapper>
        )
      })}
    </>
  )
}
