import React, {useEffect, useState} from 'react'
import ClientTable from '../componetns/Client/ClientTable'
import {getContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {getInputs} from '../store/actions/inputDataAction'
import instance from '../settings/defaultAxios'
import PaginationList from '../componetns/PaginationList'
import ClientTablePopup from '../componetns/Client/ClientTablePopup'
import {Container, CreateButton} from './LayoutStyles'

const Client = () => {
  const dispatch = useDispatch()
  const table = useLocation().pathname
  const {content} = useSelector(state => state.content)
  const {inputData} = useSelector(state => state.inputData)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState({
    show: false,
    title: 'Создание',
    isCreate: true,
    id: 0,
    formData: {}
  })

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
    <Container>
      <CreateButton variant={'warning'} onClick={() => {
        setOpen({
          ...open,
          show: true
        })
      }}>Создать</CreateButton>
      <ClientTable
        tableData={content}
        inputTypes={inputData}
        currentTable={table.slice(7)}
        dispatch={dispatch}
        currentPage={page}
        openModal={openModal}
      />
      <PaginationList
        count={count}
        updatePage={setPage}/>
      <ClientTablePopup
        show={open.show}
        handleClose={() => {setOpen({
          show: false,
          title: 'Создание',
          isCreate: true,
          id: 0,
          formData: {}
        })}}
        formData={inputData}
        isCreate={open.isCreate}
        dispatch={dispatch}
        url={table.slice(7)}
        modalTitle={open.title}
        isPretty={true}
        id={open.id}
        formDataValue={open.formData}
      />
    </Container>
  )
}
export default Client