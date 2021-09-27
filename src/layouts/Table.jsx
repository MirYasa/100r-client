import React, {useEffect, useState} from 'react'
import BasicTable from '../componetns/Tables/BasicTable'
import {useParams} from 'react-router'
import styled from 'styled-components'
import {addContent, getContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
import BasicTablePopup from '../componetns/Tables/BasicTablePopup'
import {getRows} from '../functions/getRows'
import {getInputs} from '../store/actions/inputDataAction'

const TableContainer = styled.div`
width: 90%;
margin: 50px auto 0;
`
const CreateButton = styled(Button)`
margin-bottom: 20px;
color: #3f5367;
&:hover{color: #3f5367}
`
const Table = () => {
  const dispatch = useDispatch()
  const {table} = useParams()
  const content = useSelector(state => state.content.content)
  const rowsData = useSelector(state => state.inputData.inputData)
  const [open, setOpen] = useState(false)


  useEffect(() => {
    getContent(dispatch, 'GET_CONTENT', table)
    getInputs(dispatch, 'GET_INPUT_DATA', `${table}/create`)
  }, [table])

  return (
    <TableContainer>
      <CreateButton variant={'warning'} onClick={() => {
        setOpen(true)
      }}>Создать</CreateButton>
      <BasicTable
        tableData={content}
        currentTable={table}
        dispatch={dispatch}
        inputTypes={rowsData}
        url={table}/>
      <BasicTablePopup
        show={open}
        handleClose={setOpen}
        formData={rowsData}
        isCreate={true}
        dispatch={dispatch}
        url={table}/>
    </TableContainer>
  )
}
export default Table