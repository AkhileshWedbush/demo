/* eslint-disable react/no-unescaped-entities */
import { commentSelector,selectedRowDataSelector } from '../../../store/failAnalysis/beta-fail-analysis'
import BetaTable from './table/AccountActivityTable'
import { useSelector } from 'react-redux'
import { RootContainer } from './table/styles'
import { StyledTableContainer } from './styles'

const UserComments = () => {
  const selectedRow = useSelector(selectedRowDataSelector)
  const com = useSelector(commentSelector)
  console.log(com)

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
    }]

  return (<>
     <StyledTableContainer>
      <div style={{width:0}}>
          <BetaTable data={selectedRow.betaReport}
          columns={TableColumnsDaily}/>
          </div>
    </StyledTableContainer>     
    <StyledTableContainer>
    <RootContainer>

      <table style={{ color: 'black' }}>
        <thead>
          <tr>
            <th>system</th>
            <th>comment</th>
            <th>createdBy</th>
            <th>createdOn</th>
          </tr>
        </thead>
        <tbody>
          {com != 'NULL' ?
            com.map((element: any, index: any) => {
              return (
                <tr key={index}>
                  <td>{element.system}</td>
                  <td>{element.comment}</td>
                  <td>{element.createdBy}</td>
                  <td>{element.createdOn}</td>
                </tr>
              )
            }):<h3 style={{margin:'50%'}}>"NULL"</h3>}
        </tbody>
      </table>
    </RootContainer>
    </StyledTableContainer>
    </>
  )
}

export default UserComments
