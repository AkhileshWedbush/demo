// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface MonthlyProjectedIncomeProp {
  year: string
  month: string
  cusip: string
  tickerSymbol: string
  description: string
  interest: number | null
  dividends: number | null
  payDate: string
  frequency: string
  taxable: boolean
  reinvestment: boolean
}

export interface ProjectedIncomeProp {
  clientID: string
  monthlyProjectedIncome: MonthlyProjectedIncomeProp[]
}

const projectedIncomeByMonth: ProjectedIncomeProp = {
  clientID: '123456',
  monthlyProjectedIncome: [
    {
      year: '2022',
      month: 'January',
      cusip: '1123123',
      tickerSymbol: 'AMZN',
      description: 'Amazon.com',
      interest: 1232.21,
      dividends: 23.23,
      payDate: '3/12/2022',
      frequency: 'Quarterly',
      taxable: false,
      reinvestment: true,
    },
    {
      year: '2022',
      month: 'January',
      cusip: '1123123',
      tickerSymbol: 'NFX',
      description: 'Netflix',
      interest: 1232.21,
      dividends: 23.23,
      payDate: '3/12/2022',
      frequency: 'Quarterly',
      taxable: false,
      reinvestment: true,
    },
  ],
}

const ProjectedIncomeByMonthRoute = (server: Server) => {
  server.get('/api/projectedIncomeByMonth', () => {
    return {
      projectedIncomeByMonth,
    }
  })
}

export default ProjectedIncomeByMonthRoute
