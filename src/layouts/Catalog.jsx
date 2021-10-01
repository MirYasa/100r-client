import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CatalogTable from '../componetns/Tables/CatalogTable'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import CatalogTablePopup from '../componetns/Tables/CatalogTablePopup'
import {getContent} from '../store/actions/contentAction'
import {useParams} from 'react-router'
import {getInputs} from '../store/actions/inputDataAction'

// доп вкладка каталог
// -- Продукты
// -- Типы цен только name
// -- Параметры name, data_type
// -- Производители name

const CatalogContainer = styled.div`
width: 95%;
margin: 50px auto 0;
`

const Catalog = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const {catalog} = useSelector(state => state.catalog)

  useEffect(() => {
    getContent(dispatch, 'GET_CATEGORY', '/category')
    getContent(dispatch, 'GET_MANUFACTURE', '/manufacturer')
  }, [])

  return (
    <CatalogContainer>
      <Button style={{margin: '10px 0'}} variant={'warning'} onClick={()=>{setOpen(true)}}>Создать</Button>
      <CatalogTable
        tableData={catalog}/>
      <CatalogTablePopup
      show={open}
      handleClose={setOpen}
      id={1}
      modalTitle={'Создать'}
      isCreate={true}
      />
    </CatalogContainer>

  )
}
export default Catalog