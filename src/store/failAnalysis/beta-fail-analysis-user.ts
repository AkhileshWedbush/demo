/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreState } from '../index'
import { createSlice, Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit'
import { authApiCall } from '../../utils/api'

interface State {
  comments: any
}

const initialState: State = {
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

export const { setComments } = actions

export const getComments: any =
  (system: string, failUniqueId: string) => async (dispatch: Dispatch) => {
    console.log('test1')

    try {
      const { data, status } = await authApiCall.post(
        `opsfailprocessapi/FailAnalysisReport/GetComments?system=${system}&failUniqueId=${failUniqueId}`
      )

      if (status === 200) {
        dispatch(
          setComments({
            data: data,
          })
        )
        return status
      }
    } catch {
      dispatch(
        setComments({
          data: [],
        })
      )
      return true
      //console.log(null)
    }
  }

export const commentSelector = (store: StoreState) =>
  store.failAnalysisUser.comments
export default reducer
