import styled from 'styled-components'
import { Colors } from './../../shared/styles'

interface Column {
  Header: string
  accessor: string
}

interface Data {
  [key: string]: string | number | boolean
}

export interface TableProps {
  columns: Column[]
  data: Data[]
  bgColor?: string
}

export const Wrapper = styled.div`
  box-sizing: border-box;
  table {
    table-layout: flex;
    border-collapse: collapse;
    min-width: 100%;
    flex-direction: column;
    border: none;
    background: ${Colors.White};
    text-align: left;

    thead {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;

      tr {
        display: table-row;
        // align-items: center;
        flex-wrap: wrap;
        box-shadow: inset 0px -1px 0px ${Colors.Gray30};

        th {
          display: table-cell;
          align-items: center;
          flex: 4 1 auto;
          box-shadow: inset 1px 0px 0px ${Colors.Gray30};

          :nth-of-type(1) {
            box-shadow: inset 0px 0px 0px ${Colors.Gray30};
          }
        }
      }
    }

    tbody {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      min-width: 100%;

      tr {
        display: table-row;
        align-items: center;

        td {
          display: table-cell;
          align-items: center;
          flex: 1 1 auto;
          width: content-width;

          :last-child {
            background-color: ${(props: TableProps) =>
              props.bgColor ? props.bgColor : null};
          }
        }
      }
    }

    th,
    td {
      white-space: nowrap;

      display: flex;
      align-items: center;
      flex: 0 0 auto;

      padding: 4px 8px;
      box-shadow: inset 0px -1px 0px ${Colors.Gray30};
      gap: 8px;
    }
  }
`
