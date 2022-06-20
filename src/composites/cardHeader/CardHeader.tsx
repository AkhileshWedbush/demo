import './styles.tsx'
import {
  Account,
  ChevronTop,
  LabelHeader,
  LabelAmount,
  HeaderProps,
} from './styles'
import { Icons } from '../../shared/GlobalStyle'
import Label from '../../components/label/Label'
import Image from '../../components/image/Image'
import { Backgrounds } from '../../shared/styles'

export const CardHeader = ({ label, text, ...props }: HeaderProps) => {
  //Reused label components and used chevron
  const isCollapsed = props.isCollapsed
  return (
    <Account>
      <LabelHeader>
        <Label
          fontSize={'20px'}
          fontStyle={'normal'}
          fontWeight={400}
          lineHeight={'32px'}
          color={Backgrounds.White}
          label={label}
        />
      </LabelHeader>
      <LabelAmount>
        <Label
          fontSize={'20px'}
          fontStyle={'normal'}
          fontWeight={700}
          lineHeight={'32px'}
          color={Backgrounds.White}
          label={text}
        />
      </LabelAmount>
      <ChevronTop onClick={props.accordionHandler}>
        {isCollapsed ? (
          <Image image={Icons.ChevronUp} alt={''} />
        ) : (
          <Image image={Icons.ChevronDown} alt={''} />
        )}
      </ChevronTop>
    </Account>
  )
}
