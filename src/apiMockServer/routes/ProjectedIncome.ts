// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface ProjectedIncomeFor12MonsProp {
  month: string
  interest: number | null
  dividends: number
  totalIncome: number
  principalPayment: number | null
  reinvestment: boolean
}

export interface ProjectedIncomeProp {
  clientID: string
  projectedIncomeFor12Mons: ProjectedIncomeFor12MonsProp[]
}

const projectedIncome: ProjectedIncomeProp = {
  clientID: '123456',
  projectedIncomeFor12Mons: [
    {
      month: 'January',
      interest: null,
      dividends: 23.34,
      totalIncome: 452.56,
      principalPayment: null,
      reinvestment: true,
    },
    {
      month: 'February',
      interest: null,
      dividends: 23.34,
      totalIncome: 452.56,
      principalPayment: null,
      reinvestment: true,
    },
    {
      month: 'March',
      interest: null,
      dividends: 23.34,
      totalIncome: 452.56,
      principalPayment: null,
      reinvestment: true,
    },
  ],
}

const ProjectedIncomeRoute = (server: Server) => {
  server.get('/api/projectedIncome', () => {
    return {
      projectedIncome,
    }
  })
}

export default ProjectedIncomeRoute
