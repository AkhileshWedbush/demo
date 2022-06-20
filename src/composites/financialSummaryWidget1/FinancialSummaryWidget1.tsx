import Label from '../../components/label/Label'
import {
  WholeWidget,
  FirstLabelComponent,
  SecondLabelComponent,
  LabelProps,
} from './styles'
import { Colors } from '../../shared/styles'

export const FinancialSummaryWidget1 = ({ label, text }: LabelProps) => {
  return (
    <WholeWidget>
      <FirstLabelComponent>
        <Label
          fontFamily={'SourceSansPro-Regular'}
          fontSize={'16px'}
          fontStyle={'normal'}
          fontWeight={400}
          lineHeight={'24px'}
          label={label}
          color={Colors.Gray70}
        />
      </FirstLabelComponent>

      <SecondLabelComponent>
        <Label
          fontFamily={'SourceSansPro-Bold'}
          fontSize={'26px'}
          fontStyle={'normal'}
          fontWeight={700}
          lineHeight={'48px'}
          label={text}
          color={Colors.Gray70}
        />
      </SecondLabelComponent>
    </WholeWidget>
  )
}

export default FinancialSummaryWidget1
