import styled from 'styled-components'

export interface LabelProps {
  label: string
  text: string
  text1: string
  text2: string
  text3: string
}
export const AccountWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TopLabelComponent = styled.div`
  padding-bottom: 16px;
`

export const WholeWidget = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: baseline;
  padding-bottom: 16px;
`
export const FirstLabelComponent = styled.div`
  display: flex;
  flex: 1;
`
export const SecondLabelComponent = styled.div`
  display: flex;
  flex: 1;
`
export const ThirdLabelComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
export const LossIcon = styled.div``
export const InnerFlexBox = styled.div`
  display: flex;
  flex: 1;
`
export const DividerWrapper = styled.div``
export const InnerFlexBox1 = styled.div`
  display: flex;
  align-items: center;
`
export const BottomLabelComponent = styled.div`
  padding-bottom: 16px;
`
export const ChevronWrapper = styled.div``
