import Image from './ImageLabel'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'composites/ImageLabel',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const ImageAndLabel = Template.bind({})
ImageAndLabel.args = {
  label: 'Dig Deep',
  text: 'Providing excellent service to our clients.',
}
