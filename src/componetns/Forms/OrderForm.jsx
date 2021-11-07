import React, {useEffect, useState} from 'react'
import {Form, Tab, Tabs} from 'react-bootstrap'
import ClientTab from '../Tables/OrdersTable/ClientTab'
import OrderTab from '../Tables/OrdersTable/OrderTab'
import instance from '../../settings/defaultAxios'

const OrderForm = ({
                     isCreate,
                     url,
                     id,
                     isPretty,
                     onClose,
                     allData,
                     setAllData,
                     switchForm,
                     setProductId,
                     clientHistory,
                     setClientHistory,
                     activeTab,
                     products,
                     setProducts
                   }) => {

  const [clientInputs, setClientInputs] = useState({})
  const [orderInputs, setOrderInputs] = useState({})
  const [selVal, setSelVal] = useState([])
  const [ready, setReady] = useState(false)
  const [options, setOptions] = useState([])
  const [currentClient, setCurrentClient] = useState({})

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

  console.log(products)

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

  // console.log()

  useEffect(() => {
    instance.get('admin_orders/create?search=')
      .then((data) => {
        setClientInputs(filter(data.data, clientNames))
        setOrderInputs(filter(data.data, orderNames))
        setOptions(data.data.products)
        if (isCreate) {
          setReady(true)
        }
      })
    if (!isCreate) {
      instance.get(`admin_orders/${id}`)
        .then((response) => {
          setAllData({
            comment: response.data.comment,
            products: response.data.products.length > products.length ? response.data.products.map((item) => item.id): products,
            price: response.data.price,
            client_name: response.data.client.name,
            client_email: response.data.client.email,
            client_phone: response.data.client.phone,
            client_source_id: response.data.client.client_source.id,
            order_source_id: response.data.order_source.id,
          })
          setSelVal(new Set(response.data.products))
          setReady(true)
          setCurrentClient({
            id: id,
            email: response.data.client.email,
            name: response.data.client.name,
            phone: response.data.client.phone,
            client_source_id: response.data.client.client_source.id
          })
        })
    }
  }, [])

  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
    }}>
      <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey='client' title="Клиент">
          <ClientTab
            inputs={clientInputs}
            names={clientNames}
            ready={ready}
            isCreate={isCreate}
            allData={allData}
            uploadData={uploadData}
            setAllData={setAllData}
            switchForm={switchForm}
            clientHistory={clientHistory}
            setClientHistory={setClientHistory}
            currentClient={currentClient}
            setCurrentClient={setCurrentClient}
          />
        </Tab>
        <Tab eventKey="order" title="Заказ">
          <OrderTab
            isCreate={isCreate}
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
            setProductId={setProductId}
            products={products}
            setProducts={setProducts}
            setAllData={setAllData}
          />
        </Tab>
      </Tabs>
    </Form>
  )
}
export default OrderForm