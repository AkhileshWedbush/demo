import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import NoMatchPage from './pages/noMatchPage/NoMatchPage'
import LogOnPage from './pages/logOnPage/LogOnPage'
import HomePage from './pages/HomePage'

import BetaFailDaily from './pages/betaFailAnalysis/betaFailAnalysisDailyPage'
import BetaFailHistory from './pages/betaFailAnalysis/betaFailAnalysisHistoryPage'

import P3FailDaily from './pages/p3FailAnalysis/p3FailAnalysisDailyPage'
import P3FailHistory from './pages/p3FailAnalysis/p3FailAnalysisHistoryPage'

import UserComments from './pages/betaFailAnalysis/BetaFailAnalysisPanel/userComments'

import P3UserComments from './pages/p3FailAnalysis/P3FailAnalysisPanel/P3UserComments'

import LandingPage from './pages/landingPage/LandingPage'

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<LandingPage />} />
        <Route path="BetaFailTracking" element={<BetaFailDaily />} />
        <Route path="BetaFailTracking/history" element={<BetaFailHistory />} />
        <Route path="/BetaFailTracking/comments" element={<UserComments />} />

        <Route path="p3-failtracking" element={<P3FailDaily />} />
        <Route path="p3-failtracking/history" element={<P3FailHistory />} />
        <Route path="/p3-failtracking/comments" element={<P3UserComments />} />
      </Route>
      <Route path="logOn" element={<LogOnPage />} />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  )
}
export default App
