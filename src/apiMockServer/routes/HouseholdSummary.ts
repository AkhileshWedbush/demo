// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface HouseholdSummaryProp {
  clientID: string
  totalHouseholdValue: string // Primary owner and non-primary owner?
  todayGainLossValue: string
  todayGainLossPct: string
  isTodayGainLossValueDown: boolean
  trailingRateOfReturnPct: string
  isTrailingRateOfReturnDown: boolean
  projectedIncome: string
  projectedIncomePct: string
}

const householdSummary: HouseholdSummaryProp = {
  clientID: '123456',
  totalHouseholdValue: '$1,143,343.43',
  todayGainLossValue: '$6,236.34',
  todayGainLossPct: '4.34%',
  isTodayGainLossValueDown: false,
  trailingRateOfReturnPct: '5.34%',
  isTrailingRateOfReturnDown: false,
  projectedIncome: '$23,334.34',
  projectedIncomePct: '19.34%',
}

const HouseholdSummaryRoute = (server: Server) => {
  server.get('/api/financialSummary', () => {
    return {
      householdSummary,
    }
  })
}

export default HouseholdSummaryRoute
