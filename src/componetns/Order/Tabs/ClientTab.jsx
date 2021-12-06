import React, {useEffect, useMemo, useState} from 'react'
import {TabBack} from '../../FormStyles'
import MySelect from '../../UI/Selects/MySelect'
import ClientHandlingTable from '../Table/ClientHandlingTable'
import instance from '../../../settings/defaultAxios'
import ClientSelect from '../../UI/Selects/ClientSelect'
import CustomOrderInput from '../../UI/Inputs/CustomOrderInput'

const ClientTab = ({
                     inputs,
                     ready,
                     names,
                     clientHistory,
                     uploadData,
                     allData,
                     setAllData,
                     setClientHistory,
                     currentClient,
                     setCurrentClient,
                     openOrderView
                   }) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    if (ready) {
      if (currentClient.id !== undefined) {
        setAllData({
          ...allData,
          client_email: currentClient.email,
          client_name: currentClient.name,
          client_phone: currentClient.phone,
          client_source_id: currentClient.client_source_id
        })
        instance.get(`client/history/${currentClient.id}`)
          .then(data => {
            setClientHistory(data.data)
          })
      } else {
        setClientHistory([])
        setAllData({
          ...allData,
          client_email: '',
          client_phone: allData.client_phone !== undefined ? allData.client_phone : '',
          client_source_id: 0,
          client_name: allData.client_name !== undefined ? allData.client_name : ''
        })
      }
    }
  }, [currentClient])

  const searchClients = (name, value) => {
    instance.get(`client/search?search=${value}`)
      .then(data => {
        setClients(data.data)
      })
      .catch(e => {
        console.log(e)
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
                val={allData !== undefined ? allData[key] : undefined}
                options={val}
                setData={uploadData}
              />
            )
          }
          if (key === 'client_name' || key === 'client_phone') {
            return (
              <ClientSelect
                key={key}
                options={clients}
                inputTitle={names[key]}
                onSearch={searchClients}
                setClient={setCurrentClient}
                val={allData === undefined ? undefined : allData[key]}
                setData={uploadData}
                inputName={key}/>
            )
          }
          return (
            <CustomOrderInput
              key={key}
              inputName={key}
              isRequired={false}
              val={allData !== undefined ? allData[key] : undefined}
              type={val}
              step={key === 'price' ? '0.01' : ''}
              setData={uploadData}
              inputTitle={names[key]}
            />
          )
        })
        : null}
      {ready ? <>
        <h5>История обращений</h5>
        <ClientHandlingTable
          tableData={clientHistory}
          openOrderView={openOrderView}/></> : null}
    </TabBack>
  )
}
export default ClientTab