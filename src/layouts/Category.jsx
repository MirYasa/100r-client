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
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const {categories} = useSelector(state => state.catalog)

  useEffect(() => {
    instance.get(`/admin_categories`)
      .then(data => {
        setCount(data.data.count)
      })
  }, [])
  useEffect(() => {
    getCatalog(dispatch, 'GET_CATEGORIES', `/admin_categories?page=${page}`)
  }, [page])

  return (
    <Container>
      <CreateButton variant={'warning'} onClick={() => {
        setOpen(true)
      }}>Создать</CreateButton>
      <CategoryTable
        tableData={categories}
        currentPage={page}/>
      <PaginationList
        count={count}
        updatePage={setPage}/>
      <CategoryTablePopup
        show={open}
        handleClose={setOpen}
        id={1}
        modalTitle={'Создать'}
        isCreate={true}
        data={categories}
      />
    </Container>
  )
}
export default Category