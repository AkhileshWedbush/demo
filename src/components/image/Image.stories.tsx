import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from './Image'

export default {
  title: 'Components/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Bell = Template.bind({})
Bell.args = {
  image: require('../../assets/icons/size16/Bell.png'),
}

export const Profile = Template.bind({})
Profile.args = {
  image: require('../../assets/icons/Profile.png'),
}

export const ChevronUp = Template.bind({})
ChevronUp.args = {
  image: require('../../assets/icons/ChevronUp.png'),
}

export const ChevronDown = Template.bind({})
ChevronDown.args = {
  image: require('../../assets/icons/ChevronDown.png'),
}

export const ChevronRight = Template.bind({})
ChevronRight.args = {
  image: require('../../assets/icons/ChevronRight.png'),
}

export const ChevronLeft = Template.bind({})
ChevronLeft.args = {
  image: require('../../assets/icons/size16/Chevronleft.png'),
}

export const Cancel = Template.bind({})
Cancel.args = {
  image: require('../../assets/icons/Cancel.png'),
}

export const ImageLogo = Template.bind({})
ImageLogo.args = {
  image: require('../../assets/images/WedbushLogo-sm.png'),
}

export const Logo = Template.bind({})
Logo.args = {
  image: require('../../assets/logos/isotypeSmall.png'),
}

export const Hamburger = Template.bind({})
Hamburger.args = {
  image: require('../../assets/icons/Hamburger.png'),
}
