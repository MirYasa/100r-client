import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/Inputs/CustomInput'
import FormButtons from './FormButtons'
import {Form} from 'react-bootstrap'
import {createOrders, update, updateOrders} from '../../functions/APIRequest'
import {useForm} from 'react-hook-form'
import MySelect from '../UI/Selects/MySelect'
import instance from '../../settings/defaultAxios'
import OrderSelect from '../UI/Selects/OrderSelect'

const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
`
const OrderForm = ({margin, formData, isCreate, dispatch, url, formDataValue, id, onClose}) => {
  const [allData, setAllData] = useState(isCreate ? formData : formDataValue)
  const [inputs, setInputs] = useState({})
  const [options, setOptions] = useState([])
  const [selVal, setSelVal] = useState([])
  const [ready, setReady] = useState(false)
  const {register, handleSubmit, watch, formState: {errors}} = useForm()
  const thNames = {
    id: 'ID',
    client_name: 'Клиент',
    comment: 'Комментарий',
    price: 'Цена',
    client_phone: 'Номер телефона',
    client_email: 'Email',
    client_source_id: 'Источник клиента',
    order_source_id: 'Источник заказа',
    products: 'Продукты'
  }

  console.log(allData)

  useEffect(() => {
    instance.get('admin_orders/create?search=')
      .then(data => {
        setInputs(data.data)
        setOptions(data.data.products)
        if (isCreate) {
          setReady(true)
        }
      })
    if (!isCreate) {
      instance.get(`admin_orders/${id}`)
        .then(data => {
          setAllData({
            comment: data.data.comment,
            products: data.data.products.map(item => (item.id)),
            price: data.data.price,
            client_name: data.data.client.name,
            client_email: data.data.client.email,
            client_phone: data.data.client.phone,
            client_source_id: data.data.client.client_source.id,
            order_source_id: data.data.order_source.id,
          })
          setSelVal(new Set(data.data.products))
          setReady(true)
        })
    }
  }, [])

  const uploadData = (name, val) => {
    setAllData({
      ...allData,
      [name]: val
    })
  }
  const close = () => {
    onClose(false)
  }
  const updateAction = (e) => {
    close()
    console.log(allData)
    updateOrders(e, url, allData, id, dispatch)
  }
  const createAction = (e) => {
    close()
    console.log(url)
    createOrders(e, url, allData, dispatch)
  }

  // const clear = () => {
  //   // console.log(input.current.value)
  //   // Object.keys(formData).map(key => {
  //   //   mut = {...mut, [key]: null}
  //   // })
  //   // setAllData(mut)
  // }

  return (
    <FormBack margin={margin} onSubmit={(e) => {
      e.preventDefault()
    }}>
      {ready ?
        Object.entries(inputs).map(([key, val]) => {
          if (key === 'client_source_id' || key === 'order_source_id') {
            return (<MySelect
              key={key}
              inputTitle={thNames[key]}
              inputName={key}
              val={isCreate ? undefined : allData[key]}
              options={val}
              setData={uploadData}
             isOrder={true}/>)
          }
          if (key === 'products') {
            return <OrderSelect
              key={key}
              setData={uploadData}
              inputName={key}
              inputTitle={thNames[key]}
              options={options}
              val={isCreate ? undefined : selVal}
              newOptions={setOptions}/>
          }
          return (
            <CustomInput
              key={key}
              inputName={key}
              isRequired={false}
              val={isCreate ? undefined : allData[key]}
              type={val}
              step={key === 'price' ? '0.01' : ''}
              setData={uploadData}
              inputTitle={thNames[key]}
            />
          )
        }) : null}
      <FormButtons
        buttons={[
          {title: 'Отмена', type: 'primary', action: close},
          {title: 'Сброс', type: 'primary', action: null},
          {title: 'Подтвердить', type: 'success', action: isCreate ? createAction : updateAction}]}
      />
    </FormBack>
  )
}
export default OrderForm