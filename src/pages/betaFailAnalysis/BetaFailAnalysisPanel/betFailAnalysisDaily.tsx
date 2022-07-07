/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CardContainer,
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledTableContainer,
  StyledPanelSelect,
  StyledSelectWrapper,
} from './styles'
import { Primary24 } from '../../../components/spinner/Spinner.stories'
import './table/dropdown.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Select from 'react-select'
import { Textbox } from '../../../components/textbox/Textbox'
import Button from '../../../components/button/Button'
import { userComment } from './table/TableData'
import BetaTable from './table/BetaTable'
import Label from '../../../components/label/Label'
import {
  actionSelector,
  getBetaFailAnalysis,
  isLoadingSelector,
  getAction,
  putUserComment,
} from '../../../store/failAnalysis/beta-fail-analysis'
import { betaFailAnalysisDataSelector } from '../../../store/failAnalysis/beta-fail-analysis'
import { useSelector, useDispatch } from 'react-redux'
import {
  getComments,
  commentSelector,
} from '../../../store/failAnalysis/beta-fail-analysis-user'

const BetaFailAnalysisDaily = () => {
  const dispatch = useDispatch()
  const comment = useSelector(commentSelector)
  const navigation = useNavigate()
  const data = useSelector(betaFailAnalysisDataSelector)
  const buffering = useSelector(isLoadingSelector)
  const action = useSelector(actionSelector)
  const [inputComment, setInputComment] = useState<any>(userComment)
  const [loading, setLoading] = useState<boolean>(false)
  const [ageRange, setAgeRange] = useState<any>({
    value: '',
    label: '--Select--',
  })
  const [buySell, setBuySell] = useState<any>({
    value: '',
    label: '--Select--',
  })
  const [type, setType] = useState<any>({
    value: 'daily',
    label: 'Daily',
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
    const status = await dispatch(
      getComments(type.value, data.betaReport[tb.cell.row.id].failUniqueId)
    )

    if (status) {
      window.open('/BetaFailTracking/comments')
    }
    console.log(status)
  }

  const previousComments = (tb: any) => {
    return (
      <>
        <Link to={''}>
          <div onClick={() => savedComments(tb)}>Click Here</div>
        </Link>
      </>
    )
  }
  const newUserComment = async (
    type: string,
    failId: string,
    comment: string,
    user: string,
    rowId: number
  ) => {
    await dispatch(
      putUserComment(type, failId, comment, user, input.commentDate)
    )
    inputComment[rowId].comments = ''
    console.log(inputComment[rowId].comments)
    setInputComment([...inputComment])
  }

  const addNotes = (tb: any) => {
    return (
      <>
        <div>
          <Textbox
            onChange={(e: any) => {
              inputComment[tb.cell.row.id].comments = e.target.value
              setInputComment(inputComment)
            }}
          ></Textbox>
        </div>
        <div
          style={{
            paddingTop: '3px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            bgColor="#1F5EB7"
            color="#FFFFFF"
            height="25px"
            width="60px"
            onClick={() => {
              // console.log(table[tb.cell.row.id].comments)
              newUserComment(
                type.value,
                data.betaReport[tb.cell.row.id].failUniqueId,
                inputComment[tb.cell.row.id].comments,
                'me',
                tb.cell.row.id
              )
            }}
            title="Submit"
          />
        </div>
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

  const TableColumnsDaily = [
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'SnapShot Date',
      accessor: 'snapShotDate',
    },
    {
      Header: 'Add Notes',
      Cell: addNotes,
    },
    {
      Header: 'All Comments',
      Cell: previousComments,
    },

    {
      Header: 'System',
      accessor: 'system',
    },

    {
      Header: 'AcatAccount',
      accessor: 'acatAccount',
    },
    {
      Header: 'ReceiveDeliverCode',
      accessor: 'receiveDeliverCode',
    },
    {
      Header: 'Subsidiary Number',
      accessor: 'subsidiaryNumber',
    },

    {
      Header: 'Branch',
      accessor: 'branch',
    },
    {
      Header: 'Account Number',
      accessor: 'accountNumber',
    },
    {
      Header: 'Buy/Sell',
      accessor: 'buy_Sell',
    },
    {
      Header: 'Cusip',
      accessor: 'cusip',
    },
    {
      Header: 'NasdaqSymbol',
      accessor: 'nasdaqSymbol',
    },
    {
      Header: 'SecurityNumber',
      accessor: 'securityNumber',
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
    },
    {
      Header: 'PartialQuantity',
      accessor: 'partialQuantity',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
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
      Header: 'OriginationDate',
      accessor: 'originationDate',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'FailConditionCode',
      accessor: 'failConditionCode',
    },
    {
      Header: 'DtC_CNS_Eligibility',
      accessor: 'dtC_CNS_Eligibility',
    },
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Created BY',
      accessor: 'createdBy',
    },
    {
      Header: 'Created On',
      accessor: 'createdOn',
    },
    {
      Header: 'Updated By',
      accessor: 'updateBy',
    },
    {
      Header: 'Updated On',
      accessor: 'updateOn',
    },
    {
      Header: 'Deleted',
      accessor: 'isDeleted',
    },
    {
      Header: 'Deleted By',
      accessor: 'deletedBy',
    },
    {
      Header: 'Deleted On',
      accessor: 'deletedOn',
    },
    {
      Header: 'Row Version',
      accessor: 'rowVersion',
    },
  ]

  return (
    <>
      <RootContainer>
        <StyledPanelHead>
          <StyledPanelHeadTitle>BETA FAIL ANALYSIS</StyledPanelHeadTitle>
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
                  navigation('history')
                }}
              />
            </div>
          </StyledSelectWrapper>
          <StyledSelectWrapper>
            <div className="wd230">
              <Label color={'black'} label={'Enter Date (mm/dd/yyyy)'}></Label>
              <Textbox
                type="date"
                max={new Date().toISOString().split('T')[0]}
                value={new Date().toISOString().split('T')[0]}
                onChange={(e: any) => {
                  setInput({
                    ...input,
                    startDate: e.target.value,
                    endDate: e.target.value,
                  })
                }}
              />
            </div>
            {type.value === 'history' && (
              <div className="wd230">
                <Label color={'black'} label={'End Date'}></Label>
                <Textbox
                  type="date"
                  min={input.startDate}
                  max={new Date().toISOString().split('T')[0]}
                  onChange={(e: any) => {
                    setInput({ ...input, endDate: e.target.value })
                  }}
                />
              </div>
            )}
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
                  null
                }}
                title="Download"
              />
            </div>
          </StyledSelectWrapper>

          {action === 'search' && (
            <CardContainer style={{ width: '50%' }}>
              <StyledPanelHeadTitle>
                <h4>Fail Summary</h4>
                {buffering && <Primary24></Primary24>}
              </StyledPanelHeadTitle>
              <div style={{ width: '100%' }}>
                <StyledTableContainer>
                  <BetaTable
                    data={data && data.betaSummary ? data.betaSummary : []}
                    columns={[
                      {
                        Header: 'Age Description',
                        accessor: 'ageDescription',
                      },
                      {
                        Header: 'Quantity',
                        accessor: 'quantity',
                      },
                      {
                        Header: 'SumAmount',
                        accessor: 'sumAmount',
                      },
                    ]}
                  />
                  <h5>Total Quantity:{data.vSum_Quantity}</h5>
                  <h5>Total Amount:$ {data.vSum_SumAmount}</h5>
                </StyledTableContainer>
              </div>
            </CardContainer>
          )}
          {data.betaReport && action === 'search' && (
            <StyledTableContainer>
              <BetaTable data={data.betaReport} columns={TableColumnsDaily} />
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

export default BetaFailAnalysisDaily
