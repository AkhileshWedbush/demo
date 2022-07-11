/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledTableContainer,
  StyledPanelSelect,
  StyledSelectWrapper,
} from './styles'
import { Primary24 } from '../../../components/spinner/Spinner.stories'
import './table/dropdown.css'
import { useState } from 'react'
import Select from 'react-select'
import { Textbox } from '../../../components/textbox/Textbox'
import Button from '../../../components/button/Button'
import BetaTable from './table/BetaTable'
import Label from '../../../components/label/Label'
import {
  actionSelector,
  getBetaFailAnalysis,
  isLoadingSelector,
  getAction,
  getBetaEXCEL,
} from '../../../store/failAnalysis/beta-fail-analysis'
import { betaFailAnalysisDataSelector } from '../../../store/failAnalysis/beta-fail-analysis'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getComments} from '../../../store/failAnalysis/beta-fail-analysis-user'

const BetaFailAnalysisHistory = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const data = useSelector(betaFailAnalysisDataSelector)
  const buffering = useSelector(isLoadingSelector)
  const action = useSelector(actionSelector)
  const [download, setDownload] = useState<boolean>(false)
  const [ageRange, setAgeRange] = useState<any>({
    value: '',
    label: '--Select--',
  })
  const [buySell, setBuySell] = useState<any>({
    value: '',
    label: '--Select--',
  })
  const [type, setType] = useState<any>({
    value: 'history',
    label: 'Historical',
  })
  const emptyInput = {
    commentDate: new Date().toISOString(),
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    cusip: '',
    subsidiaryNumber: '',
    branch: '',
    accountNumber: '',
    pageNumber: 0,
  }
  const [input, setInput] = useState({
    commentDate: new Date().toISOString(),
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    cusip: '',
    subsidiaryNumber: '',
    branch: '',
    accountNumber: '',
    pageNumber: 0,
  })
  const ageOptions: any = [
    { value: '', label: '--Select--' },
    { value: '1', label: '1' },
    { value: '2 to 5', label: '2 to 5' },
    { value: '6 to 30', label: '6 to 30' },
    { value: '30 and more', label: '30 more' },
  ]
  const typeOption: any = [
    { value: 'daily', label: 'Daily' },
    { value: 'history', label: 'Historical' },
  ]
  const BSoption: any = [
    { value: '', label: '--Select--' },
    { value: 'S', label: 'Sell' },
    { value: 'B', label: 'Buy' },
  ]
  //console.log( inputComment[0].comments)

  const savedComments = async (tb: any) => {
    console.log('coming')
   const status= await dispatch(
      getComments(type.value, data.betaReport[tb.cell.row.id].failUniqueId)
    )
    
    if(status){
      window.open("/BetaFailTracking/comments")
    }
    console.log(status)
  }



  const previousComments = (tb: any) => {
    return (
      <>
      <Link to={''}><div onClick={()=>savedComments(tb)}>View comments</div></Link>
    </>
      
      
    )
  }


  const handleSearch = async (firstPage: number) => {
    setInput({ ...input, pageNumber: 0 })
    console.log(input.pageNumber)
     await dispatch(
      getBetaFailAnalysis(
        'search',
        type.value,
        input.startDate,
        input.endDate,
        ageRange.value,
        input.accountNumber,
        input.branch,
        input.subsidiaryNumber,
        buySell.value,
        input.cusip,
        firstPage
      )
    )
  }

  const NavigationGetRecord = async (updatedPage: number) => {
    await dispatch(
      getBetaFailAnalysis(
        'search',
        type.value,
        input.startDate,
        input.endDate,
        ageRange.value,
        input.accountNumber,
        input.branch,
        input.subsidiaryNumber,
        buySell.value,
        input.cusip,
        updatedPage
      )
    )
  }
  const DownloadEXCEL = async () => {
    setDownload(true)
    await dispatch(
      getBetaEXCEL(
        `BETA_${type.value}_${new Date().toISOString().split('T')[0]}`,
        type.value,
        input.startDate,
        input.endDate,
        ageRange.value,
        input.accountNumber,
        input.branch,
        input.subsidiaryNumber,
        buySell.value,
        input.cusip,
      )
    )
    setDownload(false)
  }

  const TableColumnsHistorical = [
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'SnapShot Date',
        accessor: 'snapShotDate',
      },
      {
        Header: 'All Comments',
        Cell: previousComments,
      },
      {
        Header: 'ACAT Account',
        accessor: 'acatAccount',
      },
      {
        Header: 'Account Number',
        accessor: 'accountNumber',
      },
      {
        Header: 'B/S',
        accessor: 'buy_Sell',
      },
      {
        Header: 'Cusip',
        accessor: 'cusip',
      },
     
      {
        Header: 'Sec Nbr',
        accessor: 'securityNumber',
      },
      
      {
        Header: 'Symbol',
        accessor: 'nasdaqSymbol',
      },
  
      {
        Header: 'Qnty',
        accessor: 'quantity',
      },
      {
        Header: 'Partial Qnty',
        accessor: 'partialQuantity',
      },
      {
        Header: 'TradeDate',
        accessor: 'tradeDate',
      },
      {
        Header: 'SettleDate',
        accessor: 'settleDate',
      },
      {
        Header: 'Entry Date',
        accessor: 'originationDate',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Fail Code',
        accessor: 'failConditionCode',
      },
  ]

  return (
    <>
      <RootContainer>
        <StyledPanelHead>
          <StyledPanelHeadTitle>Beta Fail Analysis</StyledPanelHeadTitle>
        </StyledPanelHead>
        <StyledPanelSelect>
          <StyledSelectWrapper>
            <div className="wd230">
              <Label color={'black'} label={'Type'}></Label>
              <Select
                className="betadrop"
                options={typeOption}
                value={type}
                onChange={(e: any) => {
                  setInput(emptyInput)
                  dispatch(getAction('null'))
                  navigation(-1)
                }}
              />
            </div>
          </StyledSelectWrapper>
          <StyledSelectWrapper>
            <div className="wd230">
              <Label color={'black'} label={'Start Date (mm/dd/yyyy)'}></Label>
              <Textbox
                type="date"
                max={new Date().toISOString().split('T')[0]}
                value={new Date().toISOString().split('T')[0]}
                onChange={(e: any) => {
                  setInput({
                    ...input,
                    startDate: e.target.value,
                  })
                }}
              />
            </div>
            <div className="wd230">
              <Label color={'black'} label={'End Date (mm/dd/yyyy)'}></Label>
              <Textbox
                type="date"
                min={input.startDate}
                max={new Date().toISOString().split('T')[0]}
                onChange={(e: any) => {
                  setInput({ ...input, endDate: e.target.value })
                }}
              />
            </div>
            <div className="wd230">
              <Label color={'black'} label={'Age Range'}></Label>
              <Select
                className="betadrop"
                id="selectDrop"
                options={ageOptions}
                value={ageRange}
                onChange={(e: any) => {
                  setAgeRange(e)
                }}
              />
            </div>
            <div className="wd230">
              <Label color={'black'} label={'Buy/Sell'}></Label>
              <Select
                className="betadrop"
                options={BSoption}
                value={buySell}
                onChange={(e: any) => {
                  setBuySell(e)
                }}
              />
            </div>
          </StyledSelectWrapper>
          <StyledSelectWrapper>
            <div>
              <Label color={'black'} label={'Account Number'}></Label>
              <Textbox
                placeholder="Account Number"
                onChange={(e: any) => {
                  setInput({ ...input, accountNumber: e.target.value })
                }}
              />
            </div>
            <div>
              <Label color={'black'} label={'Branch'}></Label>
              <Textbox
                placeholder="Branch"
                onChange={(e: any) => {
                  setInput({ ...input, branch: e.target.value })
                }}
              />
            </div>
            <div>
              <Label color={'black'} label={'Cusip'}></Label>
              <Textbox
                placeholder="Cusip"
                onChange={(e: any) => {
                  setInput({ ...input, cusip: e.target.value })
                }}
              />
            </div>
            <div>
              <Label color={'black'} label={'Subsidiary Number'}></Label>
              <Textbox
                placeholder="Subsidiary Number"
                onChange={(e: any) => {
                  setInput({ ...input, subsidiaryNumber: e.target.value })
                }}
              />
            </div>
          </StyledSelectWrapper>
          <StyledSelectWrapper
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <div>
              <Button
                bgColor="#1F5EB7"
                color="#FFFFFF"
                height="35px"
                width="80px"
                onClick={() => {
                  handleSearch(0)
                }}
                title="Search"
              />
            </div>
            {buffering && <Primary24></Primary24>}
            <div>
              <Button
                bgColor="#1F5EB7"
                color="#FFFFFF"
                height="35px"
                width="80px"
                onClick={() => {
                  DownloadEXCEL()
                }}
                title="Download"
              />
            </div>
            {download && <Primary24></Primary24>}
          </StyledSelectWrapper>
          {data.betaReport && action === 'search' && (
            <StyledTableContainer>
              <BetaTable
                data={data.betaReport}
                columns={TableColumnsHistorical}
              />
            </StyledTableContainer>
          )}
        </StyledPanelSelect>
      </RootContainer>
      <StyledSelectWrapper>
        {input.pageNumber === 0 ? (
          <Button
            bgColor="#A7AFBC"
            color="#FFFFFF"
            height="35px"
            width="80px"
            title="Prev"
          />
        ) : (
          <Button
            bgColor="#1F5EB7"
            color="#FFFFFF"
            height="35px"
            width="80px"
            onClick={() => {
              setInput({ ...input, pageNumber: input.pageNumber - 1 })
              NavigationGetRecord(input.pageNumber - 1)
            }}
            title="Prev"
          />
        )}
        <div>{input.pageNumber + 1}</div>
        <Button
          bgColor="#1F5EB7"
          color="#FFFFFF"
          height="35px"
          width="80px"
          disabled={true}
          onClick={() => {
            setInput({ ...input, pageNumber: input.pageNumber + 1 })
            NavigationGetRecord(input.pageNumber + 1)
          }}
          title="Next"
        />
      </StyledSelectWrapper>
    </>
  )
}

export default BetaFailAnalysisHistory
