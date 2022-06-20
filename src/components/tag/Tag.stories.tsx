import Tag from './Tag'
export default {
  title: 'Components/Tag',
  component: Tag,
}
export const Basic = () => <Tag exclamation={true} title="Tag" />
export const Second = () => <Tag cancel={true} title="My second tag" />
export const Third = () => (
  <Tag exclamation={true} cancel={true} title="My Third tag" />
)
export const Four = () => <Tag title="My Third tag" />
