/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CardContainer,
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledTableContainer,
  StyledPanelSelect,
  StyledSelectWrapper,
  PopUpStyleContent,
  PopUpStyleLoader,
} from './styles'
import {
  Primary24,
  Primary40,
} from '../../../components/spinner/Spinner.stories'
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
  getBetaEXCEL,
  betaFailAnalysisDataSelector,
  commentSelector,
} from '../../../store/failAnalysis/beta-fail-analysis'
import { useSelector, useDispatch } from 'react-redux'
import { getComments } from '../../../store/failAnalysis/beta-fail-analysis'
import { RootContainerTable } from './table/styles'

const BetaFailAnalysisDaily = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const comments = useSelector(commentSelector)
  const data = useSelector(betaFailAnalysisDataSelector)
  const buffering = useSelector(isLoadingSelector)
  const action = useSelector(actionSelector)
  const [inputComment, setInputComment] = useState<any>(userComment)
  const [download, setDownload] = useState<boolean>(false)
  const [openComments, setOpenComments] = useState<boolean>(false)
  const [popUpLoader, setPopUpLoader] = useState<boolean>(false)
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
  let [rowRange, SetRowRange] = useState<any>({ value: 10, label: '10' })
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
  const RowRangeoption: any = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
  ]
  //console.log(rowRange.value)

  const savedComments = async (tb: any) => {
    console.log('coming')
    setPopUpLoader(true)

    await dispatch(
      getComments(type.value, data.betaReport[tb.cell.row.id].failUniqueId)
    )
    // console.log(comments)
    setPopUpLoader(false)
    setOpenComments(true)
  }

  const previousComments = (tb: any) => {
    return (
      <>
        <Link to={''}>
          <div onClick={() => savedComments(tb)}>View comments</div>
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
    setPopUpLoader(true)
    await dispatch(
      putUserComment(type, failId, comment, user, input.commentDate)
    )
    inputComment[rowId].comments = ''
    console.log(inputComment[rowId].comments)
    setInputComment([...inputComment])
    setPopUpLoader(false)
  }

  const addNotes = (tb: any) => {
    return (
      <>
        <div>
          <input
            onChange={(e: any) => {
              inputComment[tb.cell.row.id].comments = e.target.value
              setInputComment(inputComment)
            }}
          ></input>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            bgColor="#1F5EB7"
            color="#FFFFFF"
            height="18px"
            width="50px"
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
        firstPage,
        rowRange.value
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
        updatedPage,
        rowRange.value
      )
    )
  }
  const ItemPerPage = async () => {
    setInput({ ...input, pageNumber: 0 })
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
        0,
        rowRange.value
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
        buySell.value
      )
    )
    setDownload(false)
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
      Header: 'Trade Date',
      accessor: 'tradeDate',
    },
    {
      Header: 'Settle Date',
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
            <Button
              bgColor="#1F5EB7"
              color="#FFFFFF"
              height="35px"
              width="80px"
              onClick={() => {
                handleSearch(0)
              }}
              title="Search"
            ></Button>
            {buffering && <Primary24></Primary24>}
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
            {download && <Primary24></Primary24>}
          </StyledSelectWrapper>

          {action === 'search' && (
            <CardContainer style={{ width: '50%' }}>
              <StyledPanelHead>
                <h4>Fail Summary</h4>
                {buffering && <Primary24></Primary24>}
              </StyledPanelHead>
              <div style={{ width: '100%' }}>
                <StyledTableContainer>
                  <RootContainerTable>
                    <table>
                      <thead>
                        <tr>
                          <th>Age Description</th>
                          <th>Quantity</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.betaSummary &&
                          data.betaSummary.map((element: any, index: any) => {
                            return (
                              <tr key={index}>
                                <td>{element.ageDescription}</td>
                                <td>{element.quantity}</td>
                                <td>
                                  ${' '}
                                  {element.sumAmount
                                    .toFixed(2)
                                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                                </td>
                              </tr>
                            )
                          })}
                        <tr>
                          {data.vSum_SumAmount && (
                            <>
                              <td>
                                <h4
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                  }}
                                >
                                  Total Quantity:
                                </h4>
                              </td>
                              <td>
                                <h4>{data.vSum_Quantity}</h4>
                              </td>
                              <td>
                                Total Amount: ${' '}
                                {data.vSum_SumAmount
                                  .toFixed(2)
                                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                              </td>
                            </>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </RootContainerTable>
                </StyledTableContainer>
              </div>
            </CardContainer>
          )}
          {action === 'search' && (
            <div>
              <Label color={'black'} label={'Items per Page'}></Label>
              <Select
                options={RowRangeoption}
                value={rowRange}
                onChange={(e: any) => {
                  rowRange = e
                  SetRowRange({ ...rowRange })
                  {
                    action === 'search' && ItemPerPage()
                  }
                }}
              />
            </div>
          )}
          {data.betaReport && action === 'search' && (
            <>
              <StyledTableContainer>
                {popUpLoader && (
                  <PopUpStyleLoader>
                    <div>Please Wait...</div>
                    <Primary40></Primary40>
                  </PopUpStyleLoader>
                )}
                {openComments && (
                  <PopUpStyleContent>
                    <div
                      style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                      <Button
                        bgColor="#d0d7e2"
                        color="#000"
                        height="25px"
                        width="25px"
                        onClick={() => {
                          setOpenComments(false)
                        }}
                        title="X"
                      />{' '}
                    </div>
                    <StyledTableContainer>
                      <BetaTable
                        data={comments}
                        columns={[
                          {
                            Header: 'FailUniqueId',
                            accessor: 'failUniqueId',
                          },

                          {
                            Header: 'Comment',
                            accessor: 'comment',
                          },
                          {
                            Header: 'CreatedBy',
                            accessor: 'createdBy',
                          },
                          {
                            Header: 'CreatedOn',
                            accessor: 'createdOn',
                          },
                        ]}
                      />
                    </StyledTableContainer>
                    {comments.length == 0 && <h3>No Comments</h3>}
                  </PopUpStyleContent>
                )}
                <BetaTable data={data.betaReport} columns={TableColumnsDaily} />
              </StyledTableContainer>
            </>
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
