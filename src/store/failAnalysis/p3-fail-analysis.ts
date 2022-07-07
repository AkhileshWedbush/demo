/* eslint-disable @typescript-eslint/no-inferrable-types */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreState } from '../index'

/* eslint-disable prefer-const */

import { createSlice, Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit'
import { authApiCall } from '../../utils/api'

interface State {
  csv: string
  p3FailAnalysis: []
  selectedRow:[]
  totalCount: number
  isLoading: boolean
  action: string
}

let initialState: State = {
  p3FailAnalysis: [],
  selectedRow:[],
  totalCount: 0,
  isLoading: false,
  csv: '',
  action: '',
}

const { actions, reducer }: Slice = createSlice({
  name: 'p3-fail-analysis',
  initialState,
  reducers: {
    SetP3FailAnalysis: (state: State, action: PayloadAction<any>) => {
      state.p3FailAnalysis = action.payload.data
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
  },
})

export const {
  setAction,
  SetP3FailAnalysis,
  setIsLoading,
  setReturnMailAndEmailReportCSV,
  setSelectedRow,
} = actions

/**
 * getReturnMail
 * API - GET call to get p3 new accounts report
 * @param {string} startDate
 * @param {string} endDate
 *  @param {string} action
 */
export const getAction: any =
  (action: string) => async (dispatch: Dispatch) => {
    dispatch(setAction(action))
    dispatch(
      SetP3FailAnalysis({
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
      return [];
    }
  }

export const getP3FailAnalysis: any =
  (
    action: string,
    report_Type:string,
    fromDate: string,
    toDate: string,
    ageFilter: string,
    accountNumber: string,
    branch: string,
    entity: string,
    buySell: string,
    cusip: string,
    pageNumber: number,
    pageSize: number = 10,
    sortBy: string = 'SnapShotDate, Age',
    sortDirection: string = 'ASC',
    searchFilter: string = ''
  ) =>
  async (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    dispatch(
      SetP3FailAnalysis({
        data: '',
      })
    )
    try {
      const { data, status } = await authApiCall.post(
        'FailAnalysisReport/GetP3FailAnalysisHistoryReport',
        {
          report_Type,
          fromDate,
          toDate,
          ageFilter,
          accountNumber,
          branch,
          entity,
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
          SetP3FailAnalysis({
            data: data,
          })
        )
        dispatch(setIsLoading(false))
        return data
      }
    } catch (e: any) {
      console.log('null')
      dispatch(setIsLoading(false))
      dispatch(
        SetP3FailAnalysis({
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
    entity: string,
    buySell: string,
    cusip: string,
    pageNumber: number=0,
    pageSize: number =0,
    sortBy: string = 'SnapShotDate, Age',
    sortDirection: string = 'ASC',
    searchFilter: string = ''
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const { data, status } = await authApiCall.post(
        'FailAnalysisReport/GetP3FailAnalysisHistoryReport',
        {
          report_Type,
          fromDate,
          toDate,
          ageFilter,
          accountNumber,
          branch,
          entity,
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

export const p3FailAnalysisDataSelector = (store: StoreState) =>
  store.failAnalysis.p3failanalysis.p3FailAnalysis
  export const selectedRowDataSelector = (store: StoreState) =>
  store.failAnalysis.p3failanalysis.selectedRow
export const actionSelector = (store: StoreState) =>
  store.failAnalysis.p3failanalysis.action
export const errorSelector = (store: StoreState) =>
  store.failAnalysis.p3failanalysis.error
export const isLoadingSelector = (store: StoreState) =>
  store.failAnalysis.p3failanalysis.isLoading
export default reducer
