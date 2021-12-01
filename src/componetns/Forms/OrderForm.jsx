import React, {useEffect, useState} from 'react'
import {Form, Tab, Tabs} from 'react-bootstrap'
import ClientTab from '../Tables/OrdersTable/Tabs/ClientTab'
import OrderTab from '../Tables/OrdersTable/Tabs/OrderTab'
import instance from '../../settings/defaultAxios'
import {filter} from '../../functions/dataFunctions'
import StatusTab from '../Tables/OrdersTable/Tabs/StatusTab'

const OrderForm = ({
                       isCreate,
                       url,
                       id,
                       isPretty,
                       onClose,
                       allData,
                       setAllData,
                       clientHistory,
                       setClientHistory,
                       activeTab,
                       products,
                       setProducts,
                       openProduct,
                       openOrderView
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

    const uploadData = (name, val) => {
        setAllData({
            ...allData,
            [name]: val,
        })
    }

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
                        products: response.data.products.length > products.length ? response.data.products.map((item) => ({
                            id: item.id,
                            quantity: item.quantity,
                            fact_price: item.fact_price
                        })) : products,
                        price: response.data.price,
                        client_name: response.data.client.name,
                        client_email: response.data.client.email,
                        client_phone: response.data.client.phone,
                        client_source_id: response.data.client.client_source.id,
                        order_source_id: response.data.order_source.id, order_status_id: response.data.order_status_id
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
                        allData={allData}
                        uploadData={uploadData}
                        setAllData={setAllData}
                        clientHistory={clientHistory}
                        setClientHistory={setClientHistory}
                        currentClient={currentClient}
                        setCurrentClient={setCurrentClient}
                        openOrderView={openOrderView}
                    />
                </Tab>
                <Tab eventKey="order" title="Заказ">
                    <OrderTab
                        isCreate={isCreate}
                        isPretty={isPretty}
                        names={orderNames}
                        inputs={orderInputs}
                        ready={ready}
                        allData={allData}
                        uploadData={uploadData}
                        options={options}
                        setOptions={setOptions}
                        selVal={selVal}
                        products={products}
                        setProducts={setProducts}
                        openProduct={openProduct}
                        setAllData={setAllData}
                    />
                </Tab>
                <Tab eventKey='status' title="Статус">
                    <StatusTab
                        url={url}
                        id={id}
                        onClose={onClose}
                        isCreate={isCreate}
                        allData={allData}
                        uploadData={uploadData}
                    />
                </Tab>
            </Tabs>
        </Form>
    )
}
export default OrderForm