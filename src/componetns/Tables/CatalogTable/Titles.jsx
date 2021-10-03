import React, {useEffect, useState} from 'react'
import * as IconFa from 'react-icons/fa'
import {getCatalog} from '../../../store/actions/catalogAction'
import {useDispatch} from 'react-redux'

const Titles = ({item}) => {
  const thNames = {
    product_id: 'ID',
    category: 'Категория',
    name: 'Имя',
    active: 'Активность',
    manufacturer: 'Производитель',
    created_at: 'Создано'
  }
  const [field, setField] = useState('')
  const [asc, setAsc] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    getCatalog(dispatch, 'GET_CATALOG', `/admin_catalog?order=${field}&direction=${asc ? 'asc' : 'desc'}`)
  }, [field, asc])

  return (
    <th>{Object.entries(thNames).map(([key, value]) => {
      if (key === item)
        return value
    })} {asc ? <IconFa.FaSortAmountDownAlt onClick={() => {
      setField(item)
      setAsc(!asc)
    }}/> : <IconFa.FaSortAmountUpAlt onClick={() => {
      setField(item)
      setAsc(!asc)
    }}/>}</th>
  )
}
export default Titles