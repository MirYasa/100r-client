import React, {useState} from 'react'
import * as IconFa from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import {getContent} from '../../../store/actions/contentAction'

const CategoryTitles = ({item, currentPage}) => {
  const thNames = {
    id: 'ID',
    name: 'Название',
    value: 'Значение',
    phone: 'Номер телефона',
    email: 'Электронная почта',
    created_at: 'Создано',
    updated_at: 'Обновлено'
  }

  const [field, setField] = useState('')
  const [asc, setAsc] = useState(true)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      {item === 'client_source_id' ? null :
        <th>{Object.entries(thNames).map(([key, value]) => {
          if (key === item)
            return value
        })} {asc ? <IconFa.FaSortAmountDownAlt onClick={() => {
          getContent(dispatch, 'GET_CONTENT', `/clients?page=${currentPage}&order=${field}&direction=${asc ? 'asc' : 'desc'}`)
          setField(item)
          setAsc(!asc)
        }}/> : <IconFa.FaSortAmountUpAlt onClick={() => {
          getContent(dispatch, 'GET_CONTENT', `/clients?page=${currentPage}&order=${field}&direction=${asc ? 'asc' : 'desc'}`)
          setField(item)
          setAsc(!asc)
        }}/>}</th>}
    </React.Fragment>
  )
}

export default CategoryTitles