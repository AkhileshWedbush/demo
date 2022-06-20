import styled from 'styled-components'

export interface AdvisorWidgetProps {
  label1: string
  label2: string
  label3: string
  icon?: string
}

export const Base = styled.div`
  display: flex;
  flex-direction: column;
`
export const DividerWrapper = styled.div`
  background: #eef3f5;
`
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;

  flex: 0 1 95%;
  flex: 9;
  padding-top: 16px;
  padding-left: 8px;
`
export const ContactLabel1 = styled.div`
  display: flex;
  flex: 1;
`
export const ContactLabel2 = styled.div`
  order: 1;
`
export const ContactLabel3 = styled.div`
  order: 2;
`
export const IconWrapper = styled.div`
  border-radius: 1000px;
  padding-top: 16px;
  flex: 0 1 5%;
  flex: 1;
`
