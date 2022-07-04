/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */

import { useTable,useSortBy } from 'react-table'
import { useMemo } from 'react'

import { RootContainer } from './styles'
 


const CreateTable = (props: any) => {
  const data = useMemo(() =>props.data,[])

  const columns = useMemo(() =>props.columns,[])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data },useSortBy)

  return (
    <table {...getTableProps()}>
      <thead>
   
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column:any) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
               <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
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
                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const BetaTable = (props: any) => {
  return (
    <RootContainer>
      <CreateTable data={props.data} columns={props.columns} />
    </RootContainer>
  )
}

export default BetaTable
