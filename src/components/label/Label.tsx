import { LabelProps, StyledLabel } from './styles'

const Label = ({
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  color,
  label,
}: LabelProps) => (
  <StyledLabel
    fontSize={fontSize}
    fontStyle={fontStyle}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    color={color}
    label={label}
  >
    {label}
  </StyledLabel>
)

export default Label
