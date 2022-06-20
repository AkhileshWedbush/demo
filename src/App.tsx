import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//import LandingPage from './pages/landingPage/LandingPage'
import NoMatchPage from './pages/noMatchPage/NoMatchPage'
import LogOnPage from './pages/logOnPage/LogOnPage'
import HomePage from './pages/HomePage'
import HoldingsPage from './pages/holdingsPage/HoldingsPage'
import ProjectedIncomePage from './pages/projectedIncomePage/ProjectedIncomePage'
import BalancesPage from './pages/balancesPage/BalancesPage'
import BetaFailAnalysis from './pages/betaFailAnalysis/betaFailAnalysisPage'

const App: FC = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="BetaFailTracking" element={<BetaFailAnalysis />} />
      {/* <Route index element={<LandingPage />} /> */}
      <Route path="projectedIncome" element={<ProjectedIncomePage />} />
      <Route path="balance" element={<BalancesPage />} />
      <Route path="holdings" element={<HoldingsPage />} />
      <Route path="income" element={null} />
      <Route path="creditplus" element={null} />
      <Route path="unrealized-gain/loss" element={null} />
      <Route path="realized-gain/loss" element={null} />
      <Route path="monthly-statements" element={null} />
      <Route path="trade-confirmations" element={null} />
      <Route path="tax-statements" element={null} />
      <Route path="open-order-confirmations" element={null} />
      <Route path="shareholder-material" element={null} />
      <Route path="messages" element={null} />
      <Route path="wedbush-research" element={null} />
      <Route path="quotes-&-charts" element={null} />
      <Route path="calculators" element={null} />
      <Route path="settings" element={null} />
      <Route path="logout" element={null} />
    </Route>
    <Route path="logOn" element={<LogOnPage />} />
    <Route path="*" element={<NoMatchPage />} />
  </Routes>
  )
}

export default App
