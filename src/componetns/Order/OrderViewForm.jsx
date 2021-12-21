import React, {useEffect, useState} from 'react'
import instance from '../../settings/defaultAxios'
import CustomInput from '../UI/Inputs/CustomInput'
import styled from "styled-components";

export const ProducTable = styled.table`
  width: 98%;
  margin: 15px auto 0;

  thead {
    tr {
      background-color: rgb(213, 213, 213);
    }
  }

  tr {
    background-color: rgba(213, 213, 213, 0.63);
  }

  td, th {
    padding: 5px;
  }
`

const OrderViewForm = ({id}) => {
    const [data, setData] = useState({})
    const clientNames = {
        name: 'Клиент',
        phone: 'Номер телефона',
        email: 'Email',
        client_source_id: 'Источник клиента',
    }

    useEffect(() => {
        instance.get(`admin_orders/${id}`)
            .then(response => {
                setData(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    // console.log(data)

    if (data.id !== undefined) {
        return (
            <div>
                {
                    Object.entries(data.client).map(([key, val]) => {
                        if (key !== 'id' && key !== 'updated_at' && key !== 'created_at') {
                            if (key === 'client_source') {
                                return <CustomInput
                                    val={val.name}
                                    key={key}
                                    inputName={key}
                                    isView={true}
                                    inputTitle={'Источник клиента'}
                                    setData={() => {
                                    }}/>
                            }
                            return <CustomInput
                                val={val}
                                key={key}
                                inputName={key}
                                isView={true}
                                inputTitle={clientNames[key]}
                                setData={() => {
                                }}/>
                        }
                    })
                }
                {
                    Object.entries(data.order_source).map(([key, val]) => {
                        if (key === 'name') {
                            return <CustomInput
                                val={val}
                                key={key}
                                inputName={key}
                                inputTitle={'Источник заказа'}
                                setData={() => {
                                }}
                                isView={true}/>
                        }
                    })
                }
                {
                    Object.entries(data.order_status).map(([key, val]) => {
                        if (key === 'name') {
                            return <CustomInput
                                key={key}
                                val={val}
                                inputName={key}
                                isView={true}
                                inputTitle={'Статус заказа'}
                                setData={() => {
                                }}/>
                        }
                    })
                }
                <h3 style={{width: '98%', margin: '0 auto', 'font-size': '20px'}}>Продукты</h3>
                <ProducTable>
                    <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>Название</th>
                        <th>Цена продажи</th>
                        <th>Количество</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.products.map(item => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.short_name}</td>
                                    <td>{item.fact_price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </ProducTable>
            </div>
        )

    }

    return null
}
export default OrderViewForm