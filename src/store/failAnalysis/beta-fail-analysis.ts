/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreState } from '../index';

/* eslint-disable prefer-const */

import { createSlice, Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit'
import {authApiCall} from '../../utils/api'


interface State {
  csv: string;
  betaFailAnalysis: [];
  totalCount: number;
  currentPage: number;
  pages: number;
  pageSize: number;
  action: string;
 
}

let initialState: State = {
  betaFailAnalysis: [],
  totalCount: 0,
  currentPage: 0,
  pages: 0,
  pageSize: 50,
  csv: '',
  action: '',
  
};

const { actions, reducer }: Slice = createSlice({
  name: 'beta-fail-analysis',
  initialState,
  reducers: {
    setBetaFailAnalysis: (state: State, action: PayloadAction<any>) => {
      state.betaFailAnalysis = action.payload.data;
      state.totalCount = action.payload.totalCount;
      state.pages = Math.ceil(action.payload.totalCount / action.payload.pageSize);
      state.pageSize = action.payload.pageSize;
      state.currentPage = action.payload.currentPage;
    },
   
    setAction: (state: State, action: PayloadAction<string>) => {
      state.action = action.payload;
    },
    
  },
});

export const { setAction,setBetaFailAnalysis, setIsLoading,setReturnMailAndEmailReportCSV } = actions;

/**
 * getReturnMail
 * API - GET call to get beta new accounts report
 * @param {string} startDate 
 * @param {string} endDate 
 */
export const getBetaFailAnalysis:any = (  startDate: string, endDate: string) => async (dispatch: Dispatch) => {


  try {
    const { data, status } = await authApiCall.get('NewAccounts/ReturnMailAndEmailReport', {
      params: {
        startDate,
        endDate,
      }
    });

    if (status === 200) {
      dispatch(setBetaFailAnalysis({
        data: data.data,
        totalCount: data.totalCount,
      }));
      return(data)
    }
  } catch (e: any) {
    console.log("null")
  }
  
};


  export const betaFailAnalysisDataSelector = (store:StoreState) =>store.failAnalysis.betafailanalysis.betaFailAnalysis;
  export default reducer;