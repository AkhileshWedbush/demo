import { Wrapper, ButtonGroupProps, ButtonWrapper } from './styles'
import { Icons } from '../../shared/GlobalStyle'
import { Backgrounds } from '../../shared/styles'
import Button from '../../components/button/Button'

/**
 * Uses Button component and creates three buttons in a row.
 */
const ButtonGroup = ({ backgroundColor }: ButtonGroupProps) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <ButtonWrapper order={0}>
        <Button
          bgColor={Backgrounds.White}
          color={Backgrounds.Primary50}
          title={'Holdings'}
          borderColor={Backgrounds.Primary50}
        />
      </ButtonWrapper>
      <ButtonWrapper order={1}>
        <Button
          bgColor={Backgrounds.White}
          color={Backgrounds.Primary50}
          title={'Activity'}
          borderColor={Backgrounds.Primary50}
        />
      </ButtonWrapper>
      <ButtonWrapper order={2}>
        <Button
          bgColor={Backgrounds.White}
          color={Backgrounds.Primary50}
          title={'More'}
          borderColor={Backgrounds.Primary50}
          image={Icons.ChevronDown}
        />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default ButtonGroup
