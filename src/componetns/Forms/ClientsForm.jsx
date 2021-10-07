import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/Inputs/CustomInput'
import FormButtons from './FormButtons'
import {Form} from 'react-bootstrap'
import {createContent, update} from '../../functions/APIRequest'
import {useForm} from 'react-hook-form'
import MySelect from '../UI/Selects/MySelect'
import instance from '../../settings/defaultAxios'

const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
`
const BasicForm = ({margin, formData, isCreate, dispatch, url, formDataValue, id, onClose, isPretty}) => {
  const [allData, setAllData] = useState(isCreate ? formData : formDataValue)
  const [options, setOPtions] = useState([])
  let mut = {}
  const {register, handleSubmit, watch, formState: {errors}} = useForm()

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
    update(e, url, allData, dispatch, 'GET_CONTENT', id)
  }
  const createAction = (e) => {
    close()
    createContent(e, url, allData, dispatch, 'GET_CONTENT', false)
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