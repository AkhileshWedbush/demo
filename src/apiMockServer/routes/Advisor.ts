// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface AdvisorProp {
  firstName: string
  lastName: string
  middleInitial: string
  primaryEmail: string
  primaryPhoneNumber: string
}

const advisor: AdvisorProp = {
  firstName: 'Alan',
  lastName: 'Cummings',
  middleInitial: 'J',
  primaryEmail: 'alan.cummings@yahoo.com',
  primaryPhoneNumber: '723-232-8765',
}

const AdvisorRoute = (server: Server) => {
  server.get('/api/advisor', () => {
    return {
      advisor,
    }
  })
}

export default AdvisorRoute
