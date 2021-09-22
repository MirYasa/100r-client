import React, {useEffect} from 'react'
import BasicTable from '../componetns/Tables/BasicTable'
import {useParams} from 'react-router'
import styled from 'styled-components'
import {getContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'

const TableContainer = styled.div`
width: 90%;
margin: 50px auto 0;
`
const Table = () => {
  const dispatch = useDispatch()
  const {table} = useParams()
  const content = useSelector(state => state.content)
  console.log(table)
  console.log(content.content)

  useEffect(() => {
    getContent(dispatch, 'GET_CONTENT', table)
  }, [table])

    return (
      <TableContainer>
        <BasicTable
          tableData={content.content}/>
      </TableContainer>
    )    
}
export default Table