import React, {useState} from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/CustomInput'
import FormButtons from './FormButtons'
import {Form} from 'react-bootstrap'
import {createContent, update} from '../../functions/APIRequest'

const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
`
const BasicForm = ({margin, formData, isCreate, dispatch, url, formDataValue, id, onClose}) => {
  const [allData, setAllData] = useState(formDataValue)
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
    createContent(e, url, allData, dispatch, 'GET_CONTENT')
  }

  const clear = () => {
  }

  return (
    <FormBack margin={margin}>
      {
        Object.entries(formData).map(([key, val]) => {
          return (
            <CustomInput
              key={key}
              inputName={key}
              isRequired={false}
              val={isCreate ? undefined : formDataValue[key]}
              type={val}
              setData={uploadData}/>
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