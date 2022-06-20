/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CardContainer,
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledTableContainer,
  StyledPanelMonthSelect,
  StyledSelectWrapper,
} from './styles'
import './table/style.css'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { Textbox } from '../../../components/textbox/Textbox'
import Button from '../../../components/button/Button'
import { AccountActivityData } from './table/TableData'

import AccountActivityTable from './table/AccountActivityTable'

import Label from '../../../components/label/Label'

const BetaFailAnalysisPanel = () => {
  const [table, setTable] = useState<any>(AccountActivityData)
  const [comment, setComment] = useState<boolean>(false)
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
  const [input, setInput] = useState<any>({
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    cusip: '',
    entity: '',
    branch: '',
    accountNumber: '',
  })
  const options: any = [
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
  const onClick: any = (rowId: number) => {

    return console.log(table[rowId].comments)
  }

  const EditableCell = (tb: any) => {
    return (
      <form>
        <textarea
          style={{ resize: 'none' }}
          rows={2}
          cols={20}
          onChange={(e: any) => {
            onchange(e, tb.cell.row.id)
          }}
        ></textarea>
      </form>
    )
  }

  const EditableCellButton = (tb: any) => {
    return (
      <div style={{ padding: '10px' }}>
        <Button
          bgColor="#1F5EB7"
          color="#FFFFFF"
          height="35px"
          width="80px"
          onClick={() => {
            setComment(true)
            return onClick(tb.cell.row.id)
            
          }}
          title="Submit"
        />
      </div>
    )
  }

  const handleSearch = () => {
    setLoading(true)
  }

  const TableColumns = [
    {
      Header: 'Action',
      accessor: 'col3',
    },
    {
      Header: 'Category',
      accessor: 'col4',
    },
    {
      Header: 'Comments',
      Cell: EditableCell,
    },

    {
      Header: 'Submit',
      Cell: EditableCellButton,
    },
    {
      Header: 'Quantity',
      accessor: 'col5',
    },
    {
      Header: 'Symbol',
      accessor: 'col6',
    },
    {
      Header: 'Description',
      accessor: 'col7',
    },
    {
      Header: 'Amount',
      accessor: 'col8',
    },
    {
      Header: 'k',
      accessor: 'col9',
    },
    
  ]

  return (
    <>
      <RootContainer>
        <StyledPanelHead>
          <StyledPanelHeadTitle>
            {Comment &&<>{table[0].comments}</>}
            <h3>BETA Fail Analysis</h3>
          </StyledPanelHeadTitle>
        </StyledPanelHead>
        <StyledPanelMonthSelect>
          <StyledSelectWrapper>
            <div>
              <Label color={'black'} label={'Start Date'}></Label>
              <Textbox
                type="date"
                max={new Date().toISOString().split('T')[0]}
                value={new Date().toISOString().split('T')[0]}
                onChange={(e: any) => {
                  setInput({ ...input, startDate: e.target.value })
                }}
              />
            </div>
            <div style={{ inlineSize: '205px' }}>
              <Label color={'black'} label={'Age Range'}></Label>
              <Select
                className="betadrop"
                id="selectDrop"
                options={options}
                value={ageRange}
                onChange={(e: any) => {
                  setAgeRange(e)
                }}
              />
            </div>

            <div style={{ inlineSize: '210px' }}>
              <Label color={'black'} label={'Daily/Historical'}></Label>
              <Select
                className="betadrop"
                options={typeOption}
                value={type}
                onChange={(e: any) => {
                  setType(e)
                }}
              />
            </div>
            <div style={{ inlineSize: '210px' }}>
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
            <div>
              <Label color={'black'} label={'Account Number'}></Label>
              <Textbox
                placeholder="Account Number"
                onChange={(e: any) => {
                  setInput({ ...input, AccountNumber: e.target.value })
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
              <Label color={'black'} label={'Entity'}></Label>
              <Textbox
                placeholder="Entity"
                onChange={(e: any) => {
                  setInput({ ...input, entity: e.target.value })
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

          {loading && (
            <CardContainer style={{ width: '50%' }}>
              <div>Fail Summary</div>
              <StyledTableContainer>
                <th>number</th>

                <tr>1</tr>
              </StyledTableContainer>
            </CardContainer>
          )}
          {loading && (
            <RootContainer>
              <StyledTableContainer>
                <AccountActivityTable data={table} columns={TableColumns} />
              </StyledTableContainer>
            </RootContainer>
          )}
        </StyledPanelMonthSelect>
      </RootContainer>
    </>
  )
}

export default BetaFailAnalysisPanel
