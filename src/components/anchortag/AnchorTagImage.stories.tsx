import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icons } from '../../shared/GlobalStyle'
import { Colors } from '../../shared/styles'
import { AnchorTagImage } from './AnchorTagImage'

export default {
  title: 'Components/AnchorTag',
  component: AnchorTagImage,
} as ComponentMeta<typeof AnchorTagImage>

const Template: ComponentStory<typeof AnchorTagImage> = (args) => (
  <AnchorTagImage {...args} />
)

export const DefaultLinkIcon = Template.bind({})
DefaultLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Primary50,
  icon: Icons.UploadActive,
}

export const InlineLinkIcon = Template.bind({})
InlineLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Primary50,
  icon: Icons.UploadActive,
}

export const DisabledLinkIcon = Template.bind({})
DisabledLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Gray50,
  icon: Icons.UploadInactive,
}

export const InlineDisabledLinkIcon = Template.bind({})
InlineDisabledLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Gray50,
  icon: Icons.UploadInactive,
}

export const DefaultIcon = Template.bind({})
DefaultIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Primary50,
}

export const InlineIcon = Template.bind({})
InlineIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Primary50,
}

export const DisabledIcon = Template.bind({})
DisabledIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Gray50,
}

export const InlineDisabledIcon = Template.bind({})
InlineDisabledIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: Colors.Gray50,
}
