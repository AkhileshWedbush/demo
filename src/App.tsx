import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import NoMatchPage from './pages/noMatchPage/NoMatchPage'
import LogOnPage from './pages/logOnPage/LogOnPage'
import HomePage from './pages/HomePage'
import BetaFailAnalysis from './pages/betaFailAnalysis/betaFailAnalysisPage'
import LandingPage from './pages/landingPage/LandingPage'

const App: FC = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />}>
    <Route index element={<LandingPage />} />
      <Route path="BetaFailTracking" element={<BetaFailAnalysis />} />
    </Route>
    <Route path="logOn" element={<LogOnPage />} />
    <Route path="*" element={<NoMatchPage />} />
  </Routes>
  )
}
export default App
