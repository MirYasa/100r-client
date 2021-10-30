import React from 'react'
import {TabBack} from '../../Forms/FormStyles'
import MySelect from '../../UI/Selects/MySelect'
import CustomInput from '../../UI/Inputs/CustomInput'
import ClientHandlingTable from './ClientHandlingTable'
import instance from '../../../settings/defaultAxios'

const ClientTab = ({inputs, ready, names, isCreate, uploadData, allData}) => {

  const searchClients = (name, value) => {
    instance.get(`client/search?search=${value}`)
      .then(data => {
        console.log(data.data)
      })
  }
  return (
    <TabBack>
      {ready
        ? Object.entries(inputs).map(([key, val]) => {
          if (key === 'client_source_id') {
            return (
              <MySelect
                key={key}
                inputTitle={names[key]}
                inputName={key}
                val={isCreate ? undefined : allData[key]}
                options={val}
                setData={uploadData}
                isOrder={true}
              />
            )
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
              inputTitle={names[key]}
              clientSearch={key === 'client_name' || key === 'client_phone' ? searchClients : undefined}
            />
          )
        })
        : null}
      {ready ? <>
        <h5>История обращений</h5>
        <ClientHandlingTable
          tableData={[{
            client_id: 1,
            short_name: 'Клиент ',
            client_source: 'Телеграм',
            order: 'Большой',
            created_at: '28.10.2021'
          },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            }, {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
            {
              client_id: 1,
              short_name: 'Клиент ',
              client_source: 'Телеграм',
              order: 'Большой',
              created_at: '28.10.2021'
            },
          ]}/></> : null}
    </TabBack>
  )
}

export default ClientTab
