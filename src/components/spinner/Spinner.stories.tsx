import Spinner from './Spinner'
import { StyledSpinner } from './styles'

import { BorderColors } from '../../shared/styles'

export default {
  title: 'Components/Spinner',
  component: Spinner,
}

export const Primary16 = () => (
  <StyledSpinner borderColorTop={BorderColors.Primary80}></StyledSpinner>
)
export const Primary24 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Primary80}
    size={'24px'}
  ></StyledSpinner>
)
export const Primary32 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Primary50}
    size={'32px'}
  ></StyledSpinner>
)
export const Primary40 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Primary50}
    size={'40px'}
  ></StyledSpinner>
)

export const Secondary16 = () => (
  <StyledSpinner borderColorTop={BorderColors.Primary10}></StyledSpinner>
)
export const Secondary24 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Primary50}
    size={'24px'}
  ></StyledSpinner>
)

export const Secondary32 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Primary50}
    size={'32px'}
  ></StyledSpinner>
)
export const Secondary40 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Primary50}
    size={'40px'}
  ></StyledSpinner>
)

export const Error16 = () => (
  <StyledSpinner borderColorTop={BorderColors.danger}></StyledSpinner>
)
export const Error24 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.danger}
    size={'24px'}
  ></StyledSpinner>
)
export const Error32 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.danger}
    size={'32px'}
  ></StyledSpinner>
)
export const Error40 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.danger}
    size={'40px'}
  ></StyledSpinner>
)

export const Success16 = () => (
  <StyledSpinner borderColorTop={BorderColors.Success2}></StyledSpinner>
)
export const Success24 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Success2}
    size={'24px'}
  ></StyledSpinner>
)
export const Success32 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Success2}
    size={'32px'}
  ></StyledSpinner>
)
export const Success40 = () => (
  <StyledSpinner
    borderColorTop={BorderColors.Success2}
    size={'40px'}
  ></StyledSpinner>
)
