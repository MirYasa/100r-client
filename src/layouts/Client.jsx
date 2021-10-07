import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import ClientTable from '../componetns/Tables/ClientsTable/ClientTable'
import styled from 'styled-components'
import {getContent, getDefaultContent} from '../store/actions/contentAction'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router'
import BasicTableBodyRow from '../componetns/Tables/BasicTable/BasicTableBodyRow'
import BasicTablePopup from '../componetns/Tables/BasicTable/BasicTablePopup'
import {getInputs} from '../store/actions/inputDataAction'
import instance from '../settings/defaultAxios'
import PaginationList from '../componetns/PaginationList'
import OrderTablePopup from '../componetns/Tables/ClientsTable/ClientTablePopup'
import ClientTablePopup from '../componetns/Tables/ClientsTable/ClientTablePopup'


const CategoryContainer = styled.div`
width: 95%;
margin: 50px auto 0;
`

const Client = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const table = useLocation().pathname
  const {content} = useSelector(state => state.content)
  const {inputData} = useSelector(state => state.inputData)
  const [page, setPage] = useState(0)
  // const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {

    getInputs(dispatch, 'GET_INPUT_DATA', `${table}/create`)
  }, [ ])

  useEffect(() => {
    instance.get(`/clients`)
      .then(data => {
        setCount(data.data.count)
      })
    getContent(dispatch, 'GET_CONTENT', `clients?page=${page}`)
  }, [page])

    return (
      <CategoryContainer>
        <Button style={{margin: '10px 0'}} variant={'warning'} onClick={() => { setOpen(true)
        }}>Создать</Button>
        <ClientTable
          tableData={content}
          inputTypes={inputData}
          currentTable={table}
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
          url={table}
          modalTitle={'Создание'}
          isPretty={true}/>
      </CategoryContainer>
    )
}
export default Client