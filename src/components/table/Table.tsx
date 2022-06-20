import { TableProps, Wrapper } from './styles'
import { useTable } from 'react-table'

const Table = ({ columns, data, bgColor }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })
  // console.log(columns, data);

  return (
    <Wrapper bgColor={bgColor}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps()} key={index}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

export default Table
