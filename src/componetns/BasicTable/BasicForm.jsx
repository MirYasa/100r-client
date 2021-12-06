import React, {useEffect, useState} from 'react'
import CustomInput from '../UI/Inputs/CustomInput'
import FormButtons from '../FormButtons'
import {createContent, update} from '../../functions/APIRequest'
// import {useForm} from 'react-hook-form'
import MySelect from '../UI/Selects/MySelect'
import instance from '../../settings/defaultAxios'
import {FormBack} from '../FormStyles'

const BasicForm = ({margin, formData, isCreate, dispatch, url, formDataValue, id, onClose, isPretty}) => {
  const [allData, setAllData] = useState(isCreate ? formData : formDataValue)
  const [options, setOPtions] = useState([])
  // const {register, handleSubmit, watch, formState: {errors}} = useForm()

  const thNames = {
    id: 'ID',
    name: 'Название',
    value: 'Значение',
    data_type: 'Тип данных',
    phone: 'Номер телефона',
    email: 'Email',
    client_source_id: 'Источник'
  }

  useEffect(() => {
    instance.get('client_sources')
      .then(data => {
        setOPtions(data.data)
      })
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
    update(e, url, allData, dispatch, 'GET_CONTENT', id, true)
  }
  const createAction = (e) => {
    close()
    console.log(allData)
    createContent(e, url, allData, dispatch, 'GET_CONTENT', true)
  }

  const clear = () => {
    // console.log(input.current.value)
    // Object.keys(formData).map(key => {
    //   mut = {...mut, [key]: null}
    // })
    // setAllData(mut)
  }


  return (
    <FormBack margin={margin} onSubmit={(e) => {
      e.preventDefault()
      // console.log(e.target)
    }}>
      {
        Object.entries(formData).map(([key, val]) => {
          if (key === 'client_source_id') {
            return (<MySelect
              key={key}
              inputTitle={thNames[key]}
              inputName={key}
              val={isCreate ? undefined : formDataValue[key]}
              options={options}
              setData={uploadData}/>)
          }
          return (
            <CustomInput
              key={key}
              inputName={key}
              isRequired={false}
              val={isCreate ? undefined : allData[key]}
              type={val}
              setData={uploadData}
              inputTitle={isPretty ? thNames[key] : key}
            />
          )
        })
      }
      <FormButtons
        buttons={[
          {title: 'Отмена', type: 'primary', action: close},
          {title: 'Сброс', type: 'primary', action: clear},
          {title: 'Подтвердить', type: 'success', action: isCreate ? createAction : updateAction}]}
      />
    </FormBack>
  )
}
export default BasicForm