import Image from '../../components/image/Image'
import Label from '../../components/label/Label'

import {
  WholeWidget1,
  UpperLabel,
  FirstWrapperLabel,
  SecondWrapperFlex,
  WholeWrapperFlex,
  IconWrapper,
  // GainIcon,
  GainPercentage,
  LabelProps,
} from './styles'
import { Colors } from '../../shared/styles'
import { Icons } from '../../shared/GlobalStyle'

export const FinancialSummaryWidget2 = ({ label, text, text1 }: LabelProps) => {
  return (
    <WholeWidget1>
      <UpperLabel>
        <Label
          fontFamily={'SourceSansPro-Regular'}
          fontSize={'16px'}
          fontStyle={'normal'}
          fontWeight={400}
          lineHeight={'24px'}
          label={label}
          color={Colors.Gray70}
        />
      </UpperLabel>
      <WholeWrapperFlex>
        <FirstWrapperLabel>
          <Label
            fontFamily={'SourceSansPro-Regular'}
            fontSize={'24px'}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={'43px'}
            label={text}
            color={Colors.Success2}
          />
        </FirstWrapperLabel>
        <SecondWrapperFlex>
          <IconWrapper>
            {/* <GainIcon> */}
              <Image image={Icons.Grow} alt={''}></Image>
            {/* </GainIcon> */}
          </IconWrapper>
          <GainPercentage>
            <Label
              fontFamily={'SourceSansPro-Regular'}
              fontSize={'21px'}
              fontStyle={'normal'}
              fontWeight={400}
              lineHeight={'48px'}
              label={text1}
              color={Colors.Success2}
            />
          </GainPercentage>
        </SecondWrapperFlex>
      </WholeWrapperFlex>
    </WholeWidget1>
  )
}
export default FinancialSummaryWidget2
