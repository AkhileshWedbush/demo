import { FC } from 'react'
import { Routes, Route,} from 'react-router-dom'
import NoMatchPage from './pages/noMatchPage/NoMatchPage'
import LogOnPage from './pages/logOnPage/LogOnPage'
import HomePage from './pages/HomePage'
import BetaFailDaily from './pages/betaFailAnalysis/betaFailAnalysisDailyPage'
import BetaFailHistory from './pages/betaFailAnalysis/betaFailAnalysisHistoryPage'
import UserComments from './pages/betaFailAnalysis/BetaFailAnalysisPanel/userComments'
import LandingPage from './pages/landingPage/LandingPage'

const App: FC = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />}> 
    <Route index element={<LandingPage />} />
      <Route path="BetaFailTracking" element={<BetaFailDaily />} />
      <Route path="BetaFailTracking/history" element={<BetaFailHistory />} />
    </Route>
    <Route path="/BetaFailTracking/comments" element={<UserComments />} />
    <Route path="logOn" element={<LogOnPage />} />
    <Route path="*" element={<NoMatchPage />} />
  </Routes>
  )
}
export default App
