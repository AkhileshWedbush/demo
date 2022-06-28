/* eslint-disable prefer-const */
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
import './table/style.css'
import { useState } from 'react'
import Select from 'react-select'
import { Textbox } from '../../../components/textbox/Textbox'
import Button from '../../../components/button/Button'
import { AccountActivityData } from './table/TableData'
import AccountActivityTable from './table/AccountActivityTable'
import Label from '../../../components/label/Label'
import { getReturnMailAndEmailReport } from '../../../store/failAnalysis/beta-fail-analysis'
import { useDispatch } from 'react-redux'

const BetaFailAnalysisPanel = () => {
  const dispatch = useDispatch()
  const [table, setTable] = useState<any>(AccountActivityData)
  const [loading, setLoading] = useState<boolean>(false)
  const [ageRange, setAgeRange] = useState<any>({
    value: '1',
    label: '1',
  })
  const [type, setType] = useState<any>({
    value: 'Daily',
    label: 'Daily',
  })
  const [buySell, setBuySell] = useState<any>({
    value: 'Null',
    label: 'Null',
  })
  let [input, setInput] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    cusip: '',
    subsidiaryNumber: '',
    branch: '',
    accountNumber: '',
  })
  const ageOptions: any = [
    { value: '1', label: '1' },
    { value: '2_5', label: '2 to 5' },
    { value: '6_30', label: '6 to 30' },
    { value: '30_more', label: '30 more' },
  ]
  const typeOption: any = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Historical', label: 'Historical' },
  ]
  const BSoption: any = [
    { value: 'Null', label: 'Null' },
    { value: 'S', label: 'Sell' },
    { value: 'B', label: 'Buy' },
  ]
      
  


  const onchange = (e: any, rowId: number) => {
    table[rowId].comments = e.target.value
    setTable(table)
    console.log(table)
  }
  const histocialComments = (tb: any) => {
    return (
      <form>
        <textarea
          disabled
          style={{ resize: 'none' }}
          rows={5}
          cols={25}
          value={table[tb.cell.row.id].comments1}
        ></textarea>
      </form>
    )
  }

  const dailyComments = (tb: any) => {
    return (
      <form>
        <textarea
          disabled
          style={{ resize: 'none' }}
          rows={5}
          cols={20}
          value={table[tb.cell.row.id].userComment}
        ></textarea>
      </form>
    )
  }
  const appendToTextBox = (rowID: number, value: any) => {
    table[rowID].userComment = table[rowID].userComment
      ? table[rowID].userComment + '\n\n' + value
      : value
    table[rowID].comments = ''
    setTable([...table])
  }
  const addNotes = (tb: any) => {
    return (
      <div>
        <Textbox
          onChange={(e: any) => {
            onchange(e, tb.cell.row.id)
          }}
        ></Textbox>
        <div
          style={{
            paddingTop: '10px',
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
              console.log(table[tb.cell.row.id].comments)
              appendToTextBox(tb.cell.row.id, table[tb.cell.row.id].comments)
            }}
            title="Submit"
          />
        </div>
      </div>
    )
  }

  const handleSearch = async () => {
    setLoading(true)
    let searchData: any
    searchData = await dispatch(
      getReturnMailAndEmailReport(input.startDate, input.endDate)
    )
    console.log(searchData)
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
      Header: 'Branch',
      accessor: 'branch',
    },
    {
      Header: 'Subsidiary Number',
      accessor: 'entity',
    },
    {
      Header: 'Account Number',
      accessor: 'accT_NBR',
    },

    {
      Header: 'Counter Type',
      accessor: 'counterpartyType',
    },
    {
      Header: 'Security ID',
      accessor: 'securityID',
    },
    {
      Header: 'Symbol',
      accessor: 'symbol',
    },
    {
      Header: 'Buy/Sell',
      accessor: 'buY_SELL',
    },
    {
      Header: 'Current Quantity',
      accessor: 'currenT_QUANTITY',
    },
    {
      Header: 'Original Quantity',
      accessor: 'originaL_QUANTITY',
    },
    {
      Header: 'Trade Date',
      accessor: 'tradE_DATE',
    },
    {
      Header: 'Settele date',
      accessor: 'settlE_DATE',
    },
    {
      Header: 'Entery Date',
      accessor: 'entrY_DATE',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Net Ammount',
      accessor: 'neT_AMOUNT',
    },
    {
      Header: 'Fail Reason',
      accessor: 'faiL_REASON',
    },
    {
      Header: 'Status Code',
      accessor: 'dtC_PROCESS_STATUS_CODE',
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

    {
      Header: 'Comments',
      Cell: dailyComments,
    },

    {
      Header: 'Add Notes',
      Cell: addNotes,
    },
  ]
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
      Header: 'Branch',
      accessor: 'branch',
    },
    {
      Header: 'Subsidiary Number',
      accessor: 'entity',
    },
    {
      Header: 'Account Number',
      accessor: 'accT_NBR',
    },

    {
      Header: 'Counter Type',
      accessor: 'counterpartyType',
    },
    {
      Header: 'Security ID',
      accessor: 'securityID',
    },
    {
      Header: 'Symbol',
      accessor: 'symbol',
    },
    {
      Header: 'Buy/Sell',
      accessor: 'buY_SELL',
    },
    {
      Header: 'Current Quantity',
      accessor: 'currenT_QUANTITY',
    },
    {
      Header: 'Original Quantity',
      accessor: 'originaL_QUANTITY',
    },
    {
      Header: 'Trade Date',
      accessor: 'tradE_DATE',
    },
    {
      Header: 'Settele date',
      accessor: 'settlE_DATE',
    },
    {
      Header: 'Entery Date',
      accessor: 'entrY_DATE',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Net Ammount',
      accessor: 'neT_AMOUNT',
    },
    {
      Header: 'Fail Reason',
      accessor: 'faiL_REASON',
    },
    {
      Header: 'Status Code',
      accessor: 'dtC_PROCESS_STATUS_CODE',
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

    {
      Header: 'Comments',
      Cell: histocialComments,
    },
  ]

  return (
    <>
      <RootContainer>
        <StyledPanelHead>
          <StyledPanelHeadTitle>
            <h3>BETA Fail Analysis</h3>
          </StyledPanelHeadTitle>
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
                  setType(e)
                  setLoading(false)
                }}
              />
            </div>
          </StyledSelectWrapper>
          <StyledSelectWrapper>
            <div className="wd230">
              <Label
                color={'black'}
                label={
                  type.value === 'Historical' ? 'Start Date' : 'Enter Date'
                }
              ></Label>
              <Textbox
                type="date"
                max={new Date().toISOString().split('T')[0]}
                value={new Date().toISOString().split('T')[0]}
                onChange={(e: any) => {
                  setInput({ ...input, startDate: e.target.value })
                }}
              />
            </div>
            {type.value === 'Historical' && (
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
                  handleSearch()
                }}
                title="Search"
              />
            </div>
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

          {loading && type.value === 'Daily' && (
            <CardContainer style={{ width: '50%' }}>
              <div>Fail Summary</div>
              <StyledTableContainer></StyledTableContainer>
            </CardContainer>
          )}
          {loading && (
            <RootContainer>
              <StyledTableContainer>
                <AccountActivityTable
                  data={table}
                  columns={
                    type.value === 'Daily'
                      ? TableColumnsDaily
                      : TableColumnsHistorical
                  }
                />
              </StyledTableContainer>
            </RootContainer>
          )}
        </StyledPanelSelect>
      </RootContainer>
    </>
  )
}

export default BetaFailAnalysisPanel
