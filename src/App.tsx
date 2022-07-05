import { FC } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NoMatchPage from './pages/noMatchPage/NoMatchPage'
import LogOnPage from './pages/logOnPage/LogOnPage'
import HomePage from './pages/HomePage'
import BetaFailAnalysis from './pages/betaFailAnalysis/betaFailAnalysisPage'
import P3FailAnalysis from './pages/p3FailAnalysisPage/p3FailAnalysisPage'
import LandingPage from './pages/landingPage/LandingPage'
import UserComments from './pages/betaFailAnalysis/BetaFailAnalysisPanel/userComments'
import P3UserComments from './pages/p3FailAnalysisPage/P3FailAnalysisPanel/p3userComments'

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<LandingPage />} />
        <Route path="BetaFailTracking" element={<BetaFailAnalysis />} />
        <Route
          path="BetaFailTracking/usercomments"
          element={<UserComments />}
        />
        <Route path="p3-failtracking" element={<P3FailAnalysis />} />
        <Route
          path="p3-failtracking/p3userComments"
          element={<P3UserComments />}
        />
      </Route>
      <Route path="logOn" element={<LogOnPage />} />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  )
}
export default App
