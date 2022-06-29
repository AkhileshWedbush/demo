import { DividerLine, DividerProps } from './styles'

const Divider = ({ horizontal, thickness, bgColor }: DividerProps) => {
  return (
    <DividerLine
    bgColor={bgColor}
    horizontal={horizontal}
    thickness={thickness}
    ></DividerLine>
  )
}

export default Divider
