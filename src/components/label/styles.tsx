import styled from 'styled-components'

export interface LabelProps {
  fontFamily?: string
  fontSize?: string
  fontStyle?: string
  fontWeight?: number
  lineHeight?: string
  color: string
  label: string
  bgColor?: string
  letterSpacing?: string
}

export const StyledLabel = styled.p<LabelProps>`
  font-family: ${(props: LabelProps) => props.fontFamily};
  font-style: ${(props: LabelProps) => props.fontStyle};
  font-weight: ${(props: LabelProps) => props.fontWeight};
  font-size: ${(props: LabelProps) => props.fontSize};
  line-height: ${(props: LabelProps) => props.lineHeight};
  color: ${(props: LabelProps) => props.color};
  letter-spacing: ${(props: LabelProps) => props.letterSpacing};
  margin: 0;
`
