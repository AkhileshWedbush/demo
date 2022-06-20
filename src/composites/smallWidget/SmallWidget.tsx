import {
  DivWrapper,
  Wrapper,
  SubWrapper,
  MailIcon,
  IconSubWrapper,
  ChevronOuterBox,
} from './styles'
import Divider from '../../components/divider/Divider'
import { Icons } from '../../shared/GlobalStyle'
import Label from '../../components/label/Label'
import Image from '../../components/image/Image'
import { Colors } from '../../shared/styles'
interface SmallWidgetProps {
  label: string
  label1: string
  label2?: string
  icon?: any
  icon1?: any
}

export const SmallWidget = ({
  label,
  label1,
  label2,
  icon,
  icon1,
  ...props
}: SmallWidgetProps) => {
  return (
    <Wrapper>
      <IconSubWrapper>
        <MailIcon>
          <Image image={Icons.SendEmail} alt={''}></Image>
        </MailIcon>
      </IconSubWrapper>

      <SubWrapper>
        <Label
          fontSize={'14px'}
          fontStyle={'normal'}
          fontWeight={400}
          lineHeight={'18px'}
          label={label}
          color={Colors.Gray60}
        />

        <Label
          fontSize={'16px'}
          fontStyle={'normal'}
          fontWeight={400}
          lineHeight={'20px'}
          label={label1}
          color={Colors.Gray80}
        />
      </SubWrapper>
      <ChevronOuterBox>
        <Image image={Icons.ChevronRight} alt={''}></Image>
      </ChevronOuterBox>

      <DivWrapper>
        <Divider
          borderColor={Colors.LightWhite}
          horizontal={true}
          borderHeight={'1px'}
        ></Divider>
      </DivWrapper>
    </Wrapper>
  )
}
export default SmallWidget
