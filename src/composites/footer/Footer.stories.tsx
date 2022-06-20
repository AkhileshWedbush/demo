import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './Footer'
export default {
  title: 'Composites/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

const date = new Date()
const year = date.getFullYear()

export const Primary = Template.bind({})
Primary.args = {
  label: 'Copyright © ' + year + ' by Wedbush Securities. All Rights Reserved.',
  text: 'Terms of Use',
  text1: 'Privacy statement',
  text2: 'My Disclosures',
  text3: 'Service Fees',
  text4: 'Contact Us',
  text5: 'Member FINRA/SIPC',
}
