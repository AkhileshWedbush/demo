import styled from 'styled-components'

export const RootContainerTable = styled.div`
  /* background-color: pink; */
  table {
    width: 100% !important;
   
    
    /* background-color: green; */

    th {
      white-space: nowrap;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 16px;
      color:black;
      text-align: left;
      border-radius: 1px;
      padding: 4px 4px;
      border-right: 1px solid #d0d7e2;
      border-bottom: 1px solid #d0d7e2;

      /* &:nth-child(1) {
        text-align: left;
      } */

      :last-child {
        text-align: right;
      }
    }

    tr {
      td {
        padding: 2px 2px;
         color:black;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: left;
        box-shadow: inset 0px -1px 0px #d0d7e2;

        :last-child {
          /* background: #22c373; */
          text-align: left;
          border-radius: 4px;
          padding: 4px 10px;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          text-align: right;

          /* color: #ffffff; */
        }
      }
    }
  }
`
export const StyledTable = styled.div`
    margin-top:20px;
  padding: 24px;
  background: #fcfdff; 
  border: 1px solid #d0d7e2;
  box-sizing: border-box;
  overflow-x:scroll; 
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px 8px 8px 8px;
`
