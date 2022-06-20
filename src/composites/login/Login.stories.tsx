import { Login } from './Login'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'composites/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />

export const LoginForm = Template.bind({})
LoginForm.args = {
  label: 'Welcome Back',
  text1: 'Username',
  text2: 'Password',
}
