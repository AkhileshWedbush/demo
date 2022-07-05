/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
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
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Select from 'react-select'
import { Textbox } from '../../../components/textbox/Textbox'
import Button from '../../../components/button/Button'
import { userComment } from './table/TableData'
import BetaTable from './table/AccountActivityTable'
import Label from '../../../components/label/Label'
import { Link } from 'react-router-dom'
import {
  actionSelector,
  getBetaFailAnalysis,
  isLoadingSelector,
  getAction,
  putUserComment,
} from '../../../store/failAnalysis/beta-fail-analysis'
import { betaFailAnalysisDataSelector } from '../../../store/failAnalysis/beta-fail-analysis'
import { useSelector, useDispatch } from 'react-redux'
import { getComments,commentSelector,} from '../../../store/failAnalysis/beta-fail-analysis-user'

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
    setLoading(true)
    console.log('coming')
   const userData= await dispatch(
      getComments(type.value, data.betaReport[tb.cell.row.id].failUniqueId)
    )

    console.log('hjvbsdjv', comment)
    console.log(userData)
    setLoading(false)
  }

  // const histocialComments = (tb: any) => {
  //   useEffect(() => {
  //     dispatch(
  //       getComments('daily', data.betaReport[tb.cell.row.id].failUniqueId)
  //     )
  //     comment[tb.cell.row.id].new = com[tb.cell.row.id]
  //     setComment([...comment])
  //   }, [])

  // console.log(com[tb.cell.row.id].comment)

  //  const uncomments:any = comments.map((element:any,index:any)=>{
  //   uncomments.push(element.comment)
  //  })
  // console.log(comments[tb.cell.row.id].comment)
  //   return (
  //     <form>
  //       <textarea
  //         disabled
  //         style={{ resize: 'none' }}
  //         rows={5}
  //         cols={25}
  //         value={'com'}
  //       ></textarea>
  //     </form>
  //   )
  // }

  const previousComments = (tb: any) => {
    return (
      <>
        <a
          href="/BetaFailTracking/comments"
          onClick={() => {
            savedComments(tb)
          }}
          target={'blank'}
        >
          {' '}
          Comments{' '}
        </a>
        {/* <Link to="/BetaFailTracking/comments" state={{name:"akhi"}} target="_blank" >
          <p id={"t3"}>hi </p>
        </Link> */}
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
        <div style={{ marginInline: 0 }}>
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
            height="35px"
            width="80px"
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
    const data = await dispatch(
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
    //console.log(data)
    // setInputComment(data.betaReport)
    setLoading(true)
  }
  const handle = async () => {
    alert('comment Added')
    // inputComment[0].commentss=""
    // setInputComment([...inputComment, inputComment[0].commentss])
    // console.log(inputComment[0].commentess)
    // const hi = await dispatch(getComments('daily', '202201051062186B'))
    // // console.log(hi)
    // setComment({ comments: hi[2].comment })
    // console.log(hi[2], hi[2].comment)
    // console.log(comment.comments)
    // console.log(Object.keys(hi).length)
    //console.log(comment)
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
    setLoading(true)
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
      Header: 'system',
      accessor: 'system',
    },

    {
      Header: 'acatAccount',
      accessor: 'acatAccount',
    },
    {
      Header: 'receiveDeliverCode',
      accessor: 'receiveDeliverCode',
    },
    {
      Header: 'Subsidiary Number',
      accessor: 'subsidiaryNumber',
    },

    {
      Header: 'branch',
      accessor: 'branch',
    },
    {
      Header: 'Account Number',
      accessor: 'accountNumber',
    },
    {
      Header: 'buy_Sell',
      accessor: 'buy_Sell',
    },
    {
      Header: 'cusip',
      accessor: 'cusip',
    },
    {
      Header: 'nasdaqSymbol',
      accessor: 'nasdaqSymbol',
    },
    {
      Header: 'securityNumber',
      accessor: 'securityNumber',
    },
    {
      Header: 'quantity',
      accessor: 'quantity',
    },
    {
      Header: 'partialQuantity',
      accessor: 'partialQuantity',
    },
    {
      Header: 'amount',
      accessor: 'amount',
    },
    {
      Header: 'tradeDate',
      accessor: 'tradeDate',
    },
    {
      Header: 'settleDate',
      accessor: 'settleDate',
    },
    {
      Header: 'OriginationDate',
      accessor: 'originationDate',
    },
    {
      Header: 'price',
      accessor: 'price',
    },
    {
      Header: 'failConditionCode',
      accessor: 'failConditionCode',
    },
    {
      Header: 'dtC_CNS_Eligibility',
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
              <Label color={'black'} label={'Enter Date (mm/dd/yy)'}></Label>
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
              {/* <Button
                bgColor="#1F5EB7"
                color="#FFFFFF"
                height="35px"
                width="80px"
                onClick={() => {
                  handle()
                }}
                title="null"
              /> */}
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

          {action === 'search' && type.value === 'daily' && (
            <CardContainer style={{ width: '50%' }}>
              <h3>Fail Summary</h3>
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
