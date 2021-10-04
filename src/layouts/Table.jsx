import React, {useEffect, useState} from 'react'
import BasicTable from '../componetns/Tables/BasicTable/BasicTable'
import {useLocation, useParams} from 'react-router'
import styled from 'styled-components'
import {addContent, getContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
import BasicTablePopup from '../componetns/Tables/BasicTable/BasicTablePopup'
import {getRows} from '../functions/getRows'
import {getInputs} from '../store/actions/inputDataAction'

const TableContainer = styled.div`
width: 90%;
margin: 50px auto 0;
overflow-x: scroll;
`
const CreateButton = styled(Button)`
margin-bottom: 20px;
color: #3f5367;
position: sticky;
left: 0;
&:hover{color: #3f5367}
`
const Table = () => {
  const dispatch = useDispatch()
  const {table} = useParams()
  const local = useLocation()
  const {content} = useSelector(state => state.content)
  const {inputData} = useSelector(state => state.inputData)
  const [open, setOpen] = useState(false)
  const location = useLocation().pathname


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
        inputTypes={inputData}
        url={table}
        isPretty={!local.pathname.includes('tables')}/>
      <BasicTablePopup
        show={open}
        handleClose={setOpen}
        formData={inputData}
        isCreate={true}
        dispatch={dispatch}
        url={table}
        modalTitle={'Создание'}
        isPretty={!local.pathname.includes('tables')}/>
    </TableContainer>
  )
}
export default Table