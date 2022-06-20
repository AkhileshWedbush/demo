/* eslint-disable react/jsx-key */
import { useMemo, useState, useEffect } from 'react'

import TableColumns from './Columns'
import { RootContainer } from './styles'

import Table from '../../../components/table/Table'
import { Backgrounds } from '../../../shared/styles'

const CreateTable = () => {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch('/api/financialSummary')
      .then((res) => res.json())
      .then((json) => setStocks(json.financialSummary.topGainers))
  }, [])

  const data = useMemo(() => stocks, [stocks])

  interface ColumnDetails {
    [key: string]: string
  }

  const columns = useMemo<ColumnDetails[]>(() => TableColumns, []) as []

  return (
    <Table columns={columns} data={data} bgColor={Backgrounds.Saffron} />
  )
}

const TopLosersTable = () => {
  return (
    <RootContainer>
      <CreateTable />
    </RootContainer>
  )
}

export default TopLosersTable
