import Label from "../../components/label/Label";
import {
  WholeWidget,
  FirstLabelComponent,
  SecondLabelComponent,
  LabelProps,
} from "./styles";
import { Colors } from '../../shared/styles'

export const FinancialSummaryWidget4 = ({label,text}:LabelProps) =>{
  return (
    <WholeWidget>
      <FirstLabelComponent>
        <Label
          fontFamily={"SourceSansPro-Regular"}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"24px"}
          label={label}
          color={Colors.Gray70}
          />
      </FirstLabelComponent>

      {/* {Styling for second element} */}
      <SecondLabelComponent>
        <Label
          fontFamily={"SourceSansPro-Regular"}
          fontSize={"24px"}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"48px"}
          label={text}
          color={Colors.Success2}
           />
      </SecondLabelComponent>
    </WholeWidget>
  );
};
export default FinancialSummaryWidget4;
