import styled from 'styled-components'

export const RootContainer = styled.div`
  /* background-color: pink; */
  table {
    width: 100%;
    /* background-color: green; */

    th {
      margin: 0px 0px;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      text-align: right;
      border-radius: 1px;
      padding: 4px 8px;
      border-right: 1px solid #d0d7e2;
      border-bottom: 1px solid #d0d7e2;

      &:nth-child(1) {
        text-align: left;
      }
    }

    tr {
      td {
        padding: 8px;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: right;
        box-shadow: inset 0px -1px 0px #d0d7e2;

        &:nth-child(1) {
          text-align: left;
        }

        :last-child {
          background: #22c373;
          border-radius: 4px;
          padding: 4px 10px;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          text-align: right;

          color: #ffffff;
        }
      }
    }
  }
`
