import Label from '../../components/label/Label'
import {
  WholeWidgetFlex,
  FirstLabelComponent,
  SecondLabelComponent,
  ThirdLabelComponent,
  Flex,
  LabelProps,
} from './styles'
import { Colors } from '../../shared/styles'
export const FinancialSummaryWidget3 = ({
  label,
  text,
  text1,
  text2,
}: LabelProps) => {
  return (
    <WholeWidgetFlex>
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

      <Flex>
        <SecondLabelComponent>
          <Label
            fontFamily={'SourceSansPro-Regular'}
            fontSize={'26px'}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={'43px'}
            label={text}
            color={Colors.Gray80}
          />
        </SecondLabelComponent>
        <ThirdLabelComponent>
          <Label
            fontFamily={'SourceSansPro-Regular'}
            fontSize={'21px'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'48px'}
            label={text1}
            color={Colors.Gray80}
          />
          <Label
            fontFamily={'SourceSansPro-Regular'}
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'48px'}
            label={text2}
            color={Colors.Gray80}
          />
        </ThirdLabelComponent>
      </Flex>
    </WholeWidgetFlex>
  )
}
export default FinancialSummaryWidget3
