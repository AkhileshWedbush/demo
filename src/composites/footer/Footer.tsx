import { AnchorTagImage } from '../../components/anchortag/AnchorTagImage'
import Label from '../../components/label/Label'
import { Colors } from '../../shared/styles'
import { Container, AnchorWrapper, FooterProps, InnerContainer } from './styles'

export const Footer = ({
  label,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
}: FooterProps) => {
  return (
    <Container>
      <InnerContainer>
        <Label
          fontSize={'0.875rem'}
          color={Colors.Gray70}
          fontWeight={400}
          fontStyle={'normal'}
          lineHeight={'1rem'}
          label={label}
        />
      </InnerContainer>

      <AnchorWrapper>
        <AnchorTagImage
          href={'#'}
          title={text}
          fontWeight={400}
          fontSize={'0.75rem'}
          color={''}
        />{' '}
        |
        <AnchorTagImage
          href={'#'}
          title={text1}
          fontWeight={400}
          fontSize={'0.75rem'}
          color={''}
        />{' '}
        |
        <AnchorTagImage
          href={'#'}
          title={text2}
          fontWeight={400}
          fontSize={'0.75rem'}
          color={''}
        />{' '}
        |
        <AnchorTagImage
          href={'#'}
          title={text3}
          fontWeight={400}
          fontSize={'0.75rem'}
          color={''}
        />{' '}
        |
        <AnchorTagImage
          href={'#'}
          title={text4}
          fontWeight={400}
          fontSize={'0.75rem'}
          color={''}
        />{' '}
        |
        <AnchorTagImage
          href={'#'}
          title={text5}
          fontWeight={400}
          fontSize={'0.75rem'}
          color={''}
        />
      </AnchorWrapper>
    </Container>
  )
}
export default Footer
