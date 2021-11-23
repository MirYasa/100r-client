import React, {useState} from 'react'
import {FilterContainer} from './Styles'
import FilterInput from '../componetns/UI/Inputs/FilterInput'
import {Button} from 'react-bootstrap'
import {getCatalog} from '../store/actions/catalogAction'
import {FilterInputContainer} from './UI/Inputs/Styles'

const inputs = [
  {title: '№ Заказа', input: 'id'},
  {title: 'Клиент', input: 'client'},
  {title: 'Статус заказа', input: 'order_status'},
  {title: 'Дата добавления', input: 'date'},
]

const FilterPanel = ({ready, options, dispatch}) => {
  const [data, setData] = useState({
    id: '',
    client: '',
    order_status: '',
    date: '',
  })

  const uploadData = (name, val) => {
    setData({
      ...data,
      [name]: val,
    })
  }
  const filterData = () => {
    // console.log(data)
    getCatalog(dispatch, 'GET_ORDERS',
      `/admin_orders?page=&order=id&direction=asc${data.id.trim() !== '' ? `&filters[id]=${data.id}` : ''}
      ${data.client.trim() !== '' ? `&filters[client]=${data.client}` : ''}
      ${data.date.trim() !== '' ? `&filters[date]=${data.date}` : ''}
      ${data.order_status.trim() !== '' ? `&filters[order_status]=${data.order_status}` : ''}`)
  }

  return (
    <FilterContainer>
      <ul>
        {ready ? inputs.map((item, index) => {
          if (item.input === 'order_status') {
            return (
              <FilterInputContainer key={index}>
                <label>{item.title}</label>
                <select name="" id="" onChange={(e) => {
                  uploadData(item.input, e.target.value)
                }}>
                  {options.map(item => {
                    return <option value={item.id} key={item.id}>{item.name}</option>
                  })}
                </select>
              </FilterInputContainer>
            )
          }
          return (
            <FilterInput
              key={index}
              title={item.title}
              inputName={item.input}
              setValue={uploadData}
              type={item.input === 'date' ? 'date' : item.input === 'id' ? 'number' : 'text'}
            />
          )
        }) : null}
      </ul>
      <Button variant={'outline-info'} onClick={filterData}>Фильтровать</Button>
    </FilterContainer>
  )
}

export default FilterPanel
