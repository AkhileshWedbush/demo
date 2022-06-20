import { RootContainer } from './styles'
import TabControl from './tabs/Tabs'

const GainLossWidget = () => {
  return (
    <RootContainer>
      <div>Top Gainers / Losers</div>
      <TabControl />

      {/* <CreateTable /> */}
    </RootContainer>
  )
}

export default GainLossWidget
