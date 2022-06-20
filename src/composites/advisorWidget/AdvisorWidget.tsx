/* eslint-disable*/
import {
  ContactLabel1,
  ContactLabel2,
  ContactLabel3,
  IconWrapper,
  AdvisorWidgetProps,
  DividerWrapper,
  Base,
  Main,
  SubWrapper,
} from './styles'
import { Icons } from '../../shared/GlobalStyle'
import Divider from '../../components/divider/Divider'
import Label from '../../components/label/Label'
import Image from '../../components/image/Image'
import { Backgrounds, Colors } from '../../shared/styles'

export const AdvisorWidget = ({
  label1,
  label2,
  label3,
}: AdvisorWidgetProps) => {
  return (
    <Base>
      <ContactLabel1>
        <Label
          fontSize={'18px'}
          fontStyle={'normal'}
          fontWeight={700}
          lineHeight={'24px'}
          color={Colors.Gray80}
          label={label1}
        />
      </ContactLabel1>
      <DividerWrapper>
        <Divider
          borderColor={Colors.LightWhite}
          horizontal={true}
          borderHeight={'1px'}
        ></Divider>
      </DividerWrapper>
      <SubWrapper>
        <IconWrapper>
          <Image image={Icons.UnnamedAdvisor} alt={'Advisor'} />
        </IconWrapper>

        <Main>
          <ContactLabel2>
            <Label
              fontSize={'14px'}
              fontStyle={'normal'}
              fontWeight={400}
              lineHeight={'18px'}
              color={Colors.Gray60}
              label={label2}
            />
          </ContactLabel2>

          <ContactLabel3>
            <Label
              fontSize={'16px'}
              fontStyle={'normal'}
              fontWeight={700}
              lineHeight={'20px'}
              color={Colors.Gray80}
              label={label3}
            />
          </ContactLabel3>
        </Main>
      </SubWrapper>
      <DividerWrapper>
        <Divider
          borderColor={Backgrounds.Gray10}
          horizontal={true}
          borderHeight={'1px'}
        ></Divider>
      </DividerWrapper>
    </Base>
  )
}

export default AdvisorWidget
