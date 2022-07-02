import { StyledButton, ButtonProps } from './styles'
import Image from '../image/Image'

/**
 * creates customizable button
 */
const Button = ({
  bgColor,
  color,
  title,
  borderColor,
  height,
  width,
  padding,
  disabled,
  borderRadius,
  icon,
  image,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      icon={icon}
      width={width}
      disable={disabled}
      onClick={onClick}
    >
      {title}
      {image && <Image image={image} alt={'Chevron icon'} />}
    </StyledButton>
  )
}

export default Button
