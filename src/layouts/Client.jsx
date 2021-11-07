import React, {useEffect, useState} from 'react'
import ClientTable from '../componetns/Tables/ClientsTable/ClientTable'
import {getContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {getInputs} from '../store/actions/inputDataAction'
import instance from '../settings/defaultAxios'
import PaginationList from '../componetns/PaginationList'
import ClientTablePopup from '../componetns/Tables/ClientsTable/ClientTablePopup'
import {Container, CreateButton} from './LayoutStyles'

const Client = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const table = useLocation().pathname
  const {content} = useSelector(state => state.content)
  const {inputData} = useSelector(state => state.inputData)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)


  useEffect(() => {
    getInputs(dispatch, 'GET_INPUT_DATA', `${table.slice(7)}/create`)
  }, [])

  useEffect(() => {
    instance.get(`/clients`)
      .then(data => {
        setCount(data.data.count)
      })
    getContent(dispatch, 'GET_CONTENT', `clients?page=${page}`)
  }, [page])

  return (
    <Container>
      <CreateButton variant={'warning'} onClick={() => {
        setOpen(true)
      }}>Создать</CreateButton>
      <ClientTable
        tableData={content}
        inputTypes={inputData}
        currentTable={table.slice(7)}
        dispatch={dispatch}
        currentPage={page}
      />
      <PaginationList
        count={count}
        updatePage={setPage}/>
      <ClientTablePopup
        show={open}
        handleClose={setOpen}
        formData={inputData}
        isCreate={true}
        dispatch={dispatch}
        url={table.slice(7)}
        modalTitle={'Создание'}
        isPretty={true}/>
    </Container>
  )
}
export default Client