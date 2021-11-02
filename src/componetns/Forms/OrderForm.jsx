import React, {useEffect, useState} from 'react'
import {Form, Tab, Tabs} from 'react-bootstrap'
import ClientTab from '../Tables/OrdersTable/ClientTab'
import OrderTab from '../Tables/OrdersTable/OrderTab'
import instance from '../../settings/defaultAxios'

const OrderForm = ({isCreate, dispatch, url, id, isPretty, onClose, allData, setAllData, switchForm}) => {
  const [clientInputs, setClientInputs] = useState({})
  const [orderInputs, setOrderInputs] = useState({})
  const [selVal, setSelVal] = useState([])
  const [ready, setReady] = useState(false)
  const [options, setOptions] = useState([])

  const clientNames = {
    client_name: 'Клиент',
    client_phone: 'Номер телефона',
    client_email: 'Email',
    client_source_id: 'Источник клиента',
  }
  const orderNames = {
    comment: 'Комментарий',
    order_source_id: 'Источник заказа',
    products: 'Продукты',
    price: 'Цена'
  }

  const uploadData = (name, val) => {
    setAllData({
      ...allData,
      [name]: val,
    })
  }

  const filter = (startObject, allowedObject) => {
    return Object.keys(startObject)
      .filter(key => Object.keys(allowedObject).includes(key))
      .reduce((obj, key) => {
        obj[key] = startObject[key]
        return obj
      }, {})
  }

  useEffect(() => {
    instance.get('admin_orders/create?search=').then((data) => {
      setClientInputs(filter(data.data, clientNames))
      setOrderInputs(filter(data.data, orderNames))
      setOptions(data.data.products)
      if (isCreate) {
        setReady(true)
      }
    })
    if (!isCreate) {
      instance.get(`admin_orders/${id}`).then((data) => {
        setAllData({
          comment: data.data.comment,
          products: data.data.products.map((item) => item.id),
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
  console.log(allData)
  return (
    <Form onSubmit={(e) => {e.preventDefault()}}>
      <Tabs defaultActiveKey="client" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="client" title="Клиент">
          <ClientTab
            inputs={clientInputs}
            names={clientNames}
            ready={ready}
            isCreate={isCreate}
            allData={allData}
            uploadData={uploadData}
            setAllData={setAllData}
            switchForm={switchForm}
          />
        </Tab>
        <Tab eventKey="order" title="Заказ">
          <OrderTab
            isCreate={isCreate}
            dispatch={dispatch}
            url={url}
            id={id}
            onClose={onClose}
            isPretty={isPretty}
            names={orderNames}
            inputs={orderInputs}
            ready={ready}
            allData={allData}
            uploadData={uploadData}
            options={options}
            setOptions={setOptions}
            selVal={selVal}
            switchForm={switchForm}
          />
        </Tab>
      </Tabs>
    </Form>
  )
}
export default OrderForm