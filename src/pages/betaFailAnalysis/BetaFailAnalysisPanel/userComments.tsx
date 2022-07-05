/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
  import Label from '../../../components/label/Label'
  import {
   
    commentSelector,
  } from '../../../store/failAnalysis/beta-fail-analysis-user'
import { RootContainerTable } from './table/styles'
import { betaFailAnalysisDataSelector } from '../../../store/failAnalysis/beta-fail-analysis'

import { StyledTableContainer } from './styles'
  import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
  
  const UserComments  = (props:any) => {
    const location = useLocation()
    const com = useSelector(commentSelector)
   console.log("usercomments",com)
   console.log("c2",location.state)

  return (<>   
    <StyledTableContainer>

<RootContainerTable>
      <table style={{ color: 'black' }}>
        <thead>
          <tr>
            <th>comment</th>
            <th>createdBy</th>
            <th>createdOn</th>
          </tr>
        </thead>
        <tbody>
          {(com!==undefined || com!==null) &&
            com.map((element: any, index: any) => {
              return (
                <tr key={index}>
                  <td>{element.comment}</td>
                  <td>{element.createdBy}</td>
                  <td>{element.createdOn}</td>
                </tr>
              )
            // eslint-disable-next-line react/no-unescaped-entities
            })}
        </tbody>
      </table>
      </RootContainerTable>
    </StyledTableContainer>
    </>
  )
}
  export default UserComments 
  