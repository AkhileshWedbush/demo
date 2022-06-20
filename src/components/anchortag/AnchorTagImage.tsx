import {
  StyledAnchor,
  AnchorTagImageProps,
  TextWrapper,
  Visited,
} from './styles'
import { useState, Dispatch } from 'react'
import Image from '../image/Image'

export const AnchorTagImage = ({
  title,
  href,
  icon,
  color,
  fontSize,
  fontWeight,
}: AnchorTagImageProps) => {
  const [visited, setVisited] = useState<Visited>({ visited: false })

  const clickHandler = (stateSetter: Dispatch<Visited>) =>
    stateSetter({ visited: true })

  return (
    <StyledAnchor
      href={href}
      onClick={() => clickHandler(setVisited)}
      visited={visited}
      icon={icon}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      <TextWrapper>
        {title}
        {icon && <Image image={icon} alt={'AnchorTagImage icon'} />}
      </TextWrapper>
    </StyledAnchor>
  )
}
