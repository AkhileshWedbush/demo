/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootContainerTable } from './table/styles'
import { commentSelector,} from '../../../store/failAnalysis/beta-fail-analysis-user'

import { StyledTableContainer } from './styles'
  import { useSelector } from 'react-redux'
  
  const UserComments  = () => {
    const comment = useSelector(commentSelector)
    console.log("usercomments",comment)

  return (<>   
    <StyledTableContainer>

<RootContainerTable>
      <table style={{ color: 'black' }}>
        <thead>
          <tr>
            <th>FailUniqueId</th>
            <th>Comment</th>
            <th>CreatedBy</th>
            <th>CreatedOn</th>
          </tr>
        </thead>
        <tbody>
          {(comment!==undefined || comment!==null)  &&
            comment.map((element: any, index: any) => {
              return (
                <tr key={index}>
                  <td>{element.failUniqueId}</td>
                  <td>{element.comment}</td>
                  <td>{element.createdBy}</td>
                  <td>{element.createdOn}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      </RootContainerTable>
    </StyledTableContainer>
    </>
  )
}
  export default UserComments 
  