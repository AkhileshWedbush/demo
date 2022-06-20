import { DividerLine, DividerProps } from './styles'

const Divider = ({ borderColor, horizontal, borderHeight }: DividerProps) => {
  return (
    <DividerLine
      borderColor={borderColor}
      horizontal={horizontal}
      borderHeight={borderHeight}
    ></DividerLine>
  )
}

export default Divider
