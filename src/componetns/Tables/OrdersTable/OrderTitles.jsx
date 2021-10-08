import React, {useEffect, useState} from 'react'
import * as IconFa from 'react-icons/fa'
import {getCatalog} from '../../../store/actions/catalogAction'
import {useDispatch} from 'react-redux'
import {getContent} from '../../../store/actions/contentAction'

const OrderTitles = ({item, currentPage}) => {
  const thNames = {
    id: 'ID',
    client: 'Клиент',
    price: 'Цена',
    source: 'Источник',
    status: 'Статус',
    comment: 'Комментарий',
    created_at: 'Создано',
    updated_at: 'Обновлено'
  }

  const [field, setField] = useState('')
  const [asc, setAsc] = useState(true)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      {item === 'comment' ? null :
        <th>{Object.entries(thNames).map(([key, value]) => {
          if (key === item)
            return value
        })} {asc ? <IconFa.FaSortAmountDownAlt onClick={() => {
          getCatalog(dispatch, 'GET_ORDERS', `/admin_orders?page=${currentPage}&order=${field}&direction=${asc ? 'asc' : 'desc'}`)
          setField(item)
          setAsc(!asc)
        }}/> : <IconFa.FaSortAmountUpAlt onClick={() => {
          getCatalog(dispatch, 'GET_ORDERS', `/admin_orders?page=${currentPage}&order=${field}&direction=${asc ? 'asc' : 'desc'}`)
          setField(item)
          setAsc(!asc)
        }}/>}</th>}
    </React.Fragment>
  )
}

export default OrderTitles