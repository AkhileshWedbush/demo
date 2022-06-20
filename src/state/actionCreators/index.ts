import { ActionType } from './../actionTypes'
import axios from 'axios'

import { Action } from '../actions'
import { Dispatch } from 'redux'

export const searchClient = (clientID: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_CLIENT,
    })

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: clientID,
          },
        }
      )

      const names = data.objects.map((result: any) => {
        return result.package.name
      })

      dispatch({
        type: ActionType.SEARCH_CLIENT_SUCCESS,
        payload: names,
      })
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_CLIENT_ERROR,
        payload: err.message,
      })
    }
  }
}
