import React, {useEffect, useState} from 'react'
import BasicTable from '../componetns/BasicTable/BasicTable'
import {useLocation, useParams} from 'react-router-dom'
import {getDefaultContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'
import BasicTablePopup from '../componetns/BasicTable/BasicTablePopup'
import {getInputs} from '../store/actions/inputDataAction'
import {CreateButton, TableContainer} from './LayoutStyles'

const Table = () => {
  const dispatch = useDispatch()
  const {table} = useParams()
  const local = useLocation()
  const {content} = useSelector(state => state.content)
  const {inputData} = useSelector(state => state.inputData)
  const [open, setOpen] = useState({
    show: false,
    title: 'Создание',
    isCreate: true,
    id: 0,
    formData: {}
  })

  useEffect(() => {
    getDefaultContent(dispatch, 'GET_CONTENT', table)
    getInputs(dispatch, 'GET_INPUT_DATA', `${table}/create`)
  }, [table])

  const openModal = (show, title, isCreate, id, formData) => {
    setOpen({
      show: show,
      title: title,
      isCreate: isCreate,
      id: id,
      formData: formData
    })
  }
  if (open.show) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
  }

  return (
    <TableContainer>
      <CreateButton variant={'warning'} onClick={() => {
        setOpen({
          ...open,
          show: true
        })
      }}>Создать</CreateButton>
      <BasicTable
        tableData={content}
        currentTable={table}
        dispatch={dispatch}
        inputTypes={inputData}
        isPretty={!local.pathname.includes('tables')}
        openModal={openModal}/>
      <BasicTablePopup
        show={open.show}
        handleClose={() => {
          setOpen({
            show: false,
            title: 'Создание',
            isCreate: true
          })
        }}
        formData={inputData}
        isCreate={open.isCreate}
        dispatch={dispatch}
        url={table}
        modalTitle={open.title}
        id={open.id}
        formDataValue={open.formData}
        isPretty={!local.pathname.includes('tables')}/>
    </TableContainer>
  )
}
export default Table