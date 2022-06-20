// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { StyleTabs, StyleTab, StyleTabList, StyleTabPanel } from './styles'
import TopGainersTable from '../tables/TopGainersTable'
import TopLosersTable from '../tables/TopLosersTable'

const TabControl = () => {
  return (
    <StyleTabs>
      <StyleTabList>
        <StyleTab>Top Gainers</StyleTab>
        <StyleTab>Top Losers</StyleTab>
      </StyleTabList>
      <StyleTabPanel>
        <TopGainersTable />
      </StyleTabPanel>
      <StyleTabPanel>
        <TopLosersTable />
      </StyleTabPanel>
    </StyleTabs>
  )
}

export default TabControl
