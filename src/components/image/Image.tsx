import { StyledImage } from './styles'

interface ImageProps {
  image: string
  alt: string
}

const Image = ({ image, alt }: ImageProps) => {
  return <StyledImage src={image} alt={alt} />
}

export default Image
