/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreState } from '../index'
import { createSlice, Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit'
import { authApiCall } from '../../utils/api'

interface State {
  betaFailAnalysis: []
  selectedRow: []
  totalCount: number
  isLoading: boolean
  action: string
  comments: any
}

let initialState: State = {
  betaFailAnalysis: [],
  selectedRow: [],
  totalCount: 0,
  isLoading: false,
  action: '',
  comments: [],
}

const { actions, reducer }: Slice = createSlice({
  name: 'beta-fail-analysis',
  initialState,
  reducers: {
    SetBetaFailAnalysis: (state: State, action: PayloadAction<any>) => {
      state.betaFailAnalysis = action.payload.data
    },
    setSelectedRow: (state: State, action: PayloadAction<any>) => {
      state.selectedRow = action.payload.data
    },
    setIsLoading: (state: State, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },

    setAction: (state: State, action: PayloadAction<string>) => {
      state.action = action.payload
    },
    setComments: (state: State, action: PayloadAction<any>) => {
      state.comments = action.payload.data
    },
  },
})

export const {
  setAction,
  SetBetaFailAnalysis,
  setIsLoading,
  setBetaFailEXCEL,
  setSelectedRow,
  setComments,
} = actions

export const getAction: any =
  (action: string) => async (dispatch: Dispatch) => {
    dispatch(setAction(action))
    dispatch(
      SetBetaFailAnalysis({
        data: '',
      })
    )
  }
export const putUserComment: any =
  (
    system: string,
    failUniqueId: string,
    comment: string,
    createdBy: string,
    createdOn: string
  ) =>
  async () => {
    try {
      const { data, status } = await authApiCall.post(
        'opsfailprocessapi/FailAnalysisReport/AddComment',
        {
          system,
          failUniqueId,
          comment,
          createdBy,
          createdOn,
        }
      )

      if (status === 200) {
        return data
      }
    } catch {
      return []
    }
  }

export const getBetaFailAnalysis: any =
  (
    action: string,
    report_Type: string,
    fromDate: string,
    toDate: string,
    ageFilter: string,
    accountNumber: string,
    branch: string,
    subsidiaryNumber: string,
    buySell: string,
    cusip: string,
    pageNumber: number,
    pageSize: number,
    sortBy: string = 'SnapShotDate, Age',
    sortDirection: string = 'ASC',
    searchFilter: string = ''
  ) =>
  async (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    dispatch(
      SetBetaFailAnalysis({
        data: '',
      })
    )
    try {
      const { data, status } = await authApiCall.post(
        'opsfailprocessapi/FailAnalysisReport/GetBetaFailAnalysisReport',
        {
          report_Type,
          fromDate,
          toDate,
          ageFilter,
          accountNumber,
          branch,
          subsidiaryNumber,
          buySell,
          cusip,
          pageNumber,
          pageSize,
          sortBy,
          sortDirection,
          searchFilter,
        }
      )

      if (status === 200) {
        dispatch(setAction(action))
        dispatch(
          SetBetaFailAnalysis({
            data: data,
          })
        )
        dispatch(setIsLoading(false))
        return data
      }
    } catch (e: any) {
      dispatch(setIsLoading(false))
      dispatch(
        SetBetaFailAnalysis({
          data: '',
        })
      )
    }
  }
export const getComments: any =
  (system: string, failUniqueId: string) => async (dispatch: Dispatch) => {
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
    }
  }
export const getBetaEXCEL: any =
  (
    fileName: string,
    report_Type: string,
    fromDate: string,
    toDate: string,
    ageFilter: string,
    accountNumber: string,
    branch: string,
    subsidiaryNumber: string,
    buySell: string,
    cusip: string,
    pageNumber: number = 0,
    pageSize: number = 0,
    sortBy: string = 'SnapShotDate, Age',
    sortDirection: string = 'ASC',
    searchFilter: string = ''
  ) =>
  async () => {
    try {
      const { data, status } = await authApiCall.post(
        'opsfailprocessapi/FailAnalysisReport/GetBetaFailAnalysisExcelReport',
        {
          report_Type,
          fromDate,
          toDate,
          ageFilter,
          accountNumber,
          branch,
          subsidiaryNumber,
          buySell,
          cusip,
          pageNumber,
          pageSize,
          sortBy,
          sortDirection,
          searchFilter,
        },
        { responseType: 'blob' }
      )

      if (status === 200) {
        const url = window.URL.createObjectURL(new Blob([data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${fileName}.xlsx`)
        document.body.appendChild(link)
        link.click()
      }
    } catch (e: any) {
      null
    }
  }

export const betaFailAnalysisDataSelector = (store: StoreState) =>
  store.failAnalysis.betafailanalysis.betaFailAnalysis
export const selectedRowDataSelector = (store: StoreState) =>
  store.failAnalysis.betafailanalysis.selectedRow
export const actionSelector = (store: StoreState) =>
  store.failAnalysis.betafailanalysis.action
export const errorSelector = (store: StoreState) =>
  store.failAnalysis.betafailanalysis.error
export const isLoadingSelector = (store: StoreState) =>
  store.failAnalysis.betafailanalysis.isLoading
export const commentSelector = (store: StoreState) =>
  store.failAnalysis.betafailanalysis.comments
export default reducer
