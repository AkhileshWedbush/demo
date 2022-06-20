import Label from '../../components/label/Label'
import { Wrapper, Heading, SubHeading, ImageProps } from './styles'

const ImageLabel = ({ label, text }: ImageProps) => {
  return (
    <Wrapper>
      <Heading>
        <Label
          fontSize={'4.25rem'}
          fontWeight={700}
          lineHeight={'4.5rem'}
          color={'#FFFFFF'}
          label={label}
          fontStyle={'bold'}
        />
      </Heading>
      <SubHeading>
        <Label
          fontSize={'2.625rem'}
          fontWeight={400}
          lineHeight={'3rem'}
          color={'#FFFFFF'}
          label={text}
          fontStyle={'normal'}
        />
      </SubHeading>
    </Wrapper>
  )
}

export default ImageLabel
