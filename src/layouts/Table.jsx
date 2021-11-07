import React, {useEffect, useState} from 'react'
import BasicTable from '../componetns/Tables/BasicTable/BasicTable'
import {useLocation, useParams} from 'react-router-dom'
import {getDefaultContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'
import BasicTablePopup from '../componetns/Tables/BasicTable/BasicTablePopup'
import {getInputs} from '../store/actions/inputDataAction'
import {CreateButton, TableContainer} from './LayoutStyles'

const Table = () => {
  const dispatch = useDispatch()
  const {table} = useParams()
  const local = useLocation()
  const {content} = useSelector(state => state.content)
  const {inputData} = useSelector(state => state.inputData)
  const [open, setOpen] = useState(false)


  console.log(table)
  useEffect(() => {
    getDefaultContent(dispatch, 'GET_CONTENT', table)
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