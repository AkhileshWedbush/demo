/* eslint-disable @typescript-eslint/no-inferrable-types */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreState } from '../index'

/* eslint-disable prefer-const */

import { createSlice, Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit'
import { authApiCall } from '../../utils/api'

interface State {
  comments: []
}

let initialState: State = {
  comments: [],
 
}

const { actions, reducer }: Slice = createSlice({
  name: 'beta-fail-analysis-user',
  initialState,
  reducers: {
    setComments: (state: State, action: PayloadAction<any>) => {
      console.log('hellow')
      console.log(action.payload.data)
      state.comments = action.payload.data
    },
  },
})

export const {
  setComments,
} = actions


export const getComments: any =
  (system: string, failUniqueId: string) => async (dispatch: Dispatch) => {
    console.log('test1')

    try {
      const { data, status } = await authApiCall.get(
        'FailAnalysisReport/GetComments',
        {
          params: {
            system,
            failUniqueId,
          },
        }
      )

      if (status === 200) {
        dispatch(
          setComments({
            data: data,
          })
        )
      }
    } catch {
      dispatch(
        setComments({
          data: [],
        })
      )
      //console.log(null)
    }
  }


export const commentSelector = (store: StoreState) =>
  store.failAnalysisUser.comments
export default reducer
