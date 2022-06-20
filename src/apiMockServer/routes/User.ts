// Need user data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Server } from 'miragejs'

export interface UserProp {
  userName: string
  email: string
  password: string
}

const user: UserProp = {
  userName: 'wd23144',
  email: 'allison123@yahoo.com',
  password: '***********',
}

const UserRoute = (server: Server) => {
  server.get('/api/user', () => {
    return {
      user,
    }
  })
}

export default UserRoute
