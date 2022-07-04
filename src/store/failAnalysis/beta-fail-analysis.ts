/* eslint-disable @typescript-eslint/no-inferrable-types */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreState } from '../index'

/* eslint-disable prefer-const */

import { createSlice, Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit'
import { authApiCall } from '../../utils/api'

interface State {
  csv: string
  betaFailAnalysis: []
  selectedRow:[]
  comments: []
  totalCount: number
  isLoading: boolean
  action: string
}

let initialState: State = {
  betaFailAnalysis: [],
  selectedRow:[],
  comments: [],
  totalCount: 0,
  isLoading: false,
  csv: '',
  action: '',
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
    setComments: (state: State, action: PayloadAction<any>) => {
      console.log('hi')
      console.log(action.payload)
      state.comments = action.payload.data
    },
    setIsLoading: (state: State, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },

    setAction: (state: State, action: PayloadAction<string>) => {
      state.action = action.payload
    },
  },
})

export const {
  setAction,
  SetBetaFailAnalysis,
  setIsLoading,
  setReturnMailAndEmailReportCSV,
  setComments,
  setSelectedRow,
} = actions

/**
 * getReturnMail
 * API - GET call to get beta new accounts report
 * @param {string} startDate
 * @param {string} endDate
 *  @param {string} action
 */
export const getAction: any =
  (action: string) => async (dispatch: Dispatch) => {
    dispatch(setAction(action))
    dispatch(
      SetBetaFailAnalysis({
        data: '',
      })
    )
  }
export const getUserComment: any =
  ( 
  
    system: string,
    failUniqueId: string,
    comment: string,
    createdBy: string,
    createdOn: string
  ) =>
  async () => {
    console.log('test1')
    try {
      const { data, status } = await authApiCall.post(
        'FailAnalysisReport/AddComment',
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
      //console.log(null)
    }
  }
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
        return data
      }
    } catch {
      dispatch(
        setComments({
          data: 'NULL',
        })
      )
      //console.log(null)
    }
  }
export const getBetaFailAnalysis: any =
  (
    action: string,
    report_Type:string,
    fromDate: string,
    toDate: string,
    ageFilter: string,
    accountNumber: string,
    branch: string,
    subsidiaryNumber: string,
    buySell: string,
    cusip: string,
    pageNumber: number,
    pageSize: number = 20,
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
        'FailAnalysisReport/GetBetaFailAnalysisHistoryReport',
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
        return true
      }
    } catch (e: any) {
      console.log('null')
      dispatch(setIsLoading(false))
      dispatch(
        SetBetaFailAnalysis({
          data: '',
        })
      )
    }
    
  }
  export const getSelectedRow: any =
  (
    report_Type:string,
    fromDate: string,
    toDate: string,
    ageFilter: string,
    accountNumber: string,
    branch: string,
    subsidiaryNumber: string,
    buySell: string,
    cusip: string,
    pageNumber: number=0,
    pageSize: number = 1,
    sortBy: string = 'SnapShotDate, Age',
    sortDirection: string = 'ASC',
    searchFilter: string = ''
  ) =>
  async (dispatch: Dispatch) => {
    dispatch(
      SetBetaFailAnalysis({
        data: '',
      })
    )
    try {
      const { data, status } = await authApiCall.post(
        'FailAnalysisReport/GetBetaFailAnalysisHistoryReport',
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
        dispatch(
          setSelectedRow({
            data: data,
          })
        )
      }
    } catch (e: any) {
      console.log('null')
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
