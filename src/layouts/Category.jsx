import React, {useEffect, useState} from 'react'
import {getCatalog} from '../store/actions/catalogAction'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../settings/defaultAxios'
import PaginationList from '../componetns/PaginationList'
import CategoryTable from '../componetns/Tables/CategoryTable/CategoryTable'
import CategoryTablePopup from '../componetns/Tables/CategoryTable/CategoryTablePopup'
import {Container, CreateButton} from './LayoutStyles'

const Category = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const {categories} = useSelector(state => state.catalog)
  const [open, setOpen] = useState({
    show: false,
    title: 'Создать',
    data: categories,
    isCreate: true,

  })

  useEffect(() => {
    instance.get(`/admin_categories`)
      .then(data => {
        setCount(data.data.count)
      })
  }, [])
  useEffect(() => {
    getCatalog(dispatch, 'GET_CATEGORIES', `/admin_categories?page=${page}`)
  }, [page])

  const openModal = (show, title, data, isCreate) => {
    setOpen({
      show: show,
      title: title,
      data: data,
      isCreate: isCreate
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
      <CategoryTable
        tableData={categories}
        currentPage={page}
        openModal={openModal}/>
      <PaginationList
        count={count}
        updatePage={setPage}/>
      <CategoryTablePopup
        show={open.show}
        handleClose={() => {setOpen({show: false})}}
        modalTitle={open.title}
        isCreate={open.isCreate}
        data={open.data}
      />
    </Container>
  )
}
export default Category