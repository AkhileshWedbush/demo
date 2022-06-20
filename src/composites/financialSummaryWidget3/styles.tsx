import styled from 'styled-components'
import { Colors } from '../../shared/styles'

export interface LabelProps {
  label: string
  text: string
  text1: string
  text2: string
}

export const WholeWidgetFlex = styled.div<LabelProps>`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  background: ${Colors.Gray05};
  border: 1px solid ${Colors.Gray30};
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  background-color: ${Colors.Gray05};
  max-height: 88px;
  overflow: hidden;
`

export const FirstLabelComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  // padding: 4px 0px 8px 0px;
`
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  // gap: 8px;
`
export const SecondLabelComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0;
`
export const ThirdLabelComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0;
`
