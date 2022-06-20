/* eslint-disable react/jsx-key */
import { useMemo } from 'react'

import { useTable } from 'react-table'
import { Next12MonthsData } from './TableData'
import TableColumns from './Columns'
import { RootContainer } from './styles'

const CreateTable = () => {
  const data = useMemo(() => Next12MonthsData, [])

  interface ColumnDetails {
    [key: string]: string
  }

  const columns = useMemo<ColumnDetails[]>(() => TableColumns, []) as []

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const StocksMoreTable = () => {
  return (
    <RootContainer>
      <CreateTable />
    </RootContainer>
  )
}

export default StocksMoreTable
