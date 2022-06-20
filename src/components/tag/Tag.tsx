import { FC } from 'react'
import Image from '../image/Image'
import Label from '../label/Label'
import { IconWrapper, LabelWrapper, StyledTag } from './styles'
interface TagProps {
  title?: string
  exclamation?: any
  cancel?: any
}

const Tag: FC<TagProps> = ({ title = 'My title', exclamation, cancel }) => {
  return (
    <StyledTag>
      {exclamation && (
        <IconWrapper>
          <Image
            image={require('../../assets/icons/size16/Exclamation.png')}
            alt={''}
          />
        </IconWrapper>
      )}
      <LabelWrapper>
        <Label
          fontSize="14px"
          fontStyle="normal"
          lineHeight="24px"
          fontWeight={400}
          color="#0F172A "
          label={title}
        />
      </LabelWrapper>
      {cancel && (
        <IconWrapper>
          <Image
            image={require('../../assets/icons/size16/Cancel.png')}
            alt={''}
          />
        </IconWrapper>
      )}
    </StyledTag>
  )
}

export default Tag
