import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/Inputs/CustomInput'
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
  const input = useRef(null)
  let mut = {}

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
    console.log(input.current.value)
    // Object.keys(formData).map(key => {
    //   mut = {...mut, [key]: null}
    // })
    // setAllData(mut)
  }

  console.log(allData)

  return (
    <FormBack margin={margin}>
      {
        Object.entries(formData).map(([key, val]) => {
          return (
            <CustomInput
              key={key}
              inputName={key}
              isRequired={false}
              val={isCreate ? undefined : allData[key]}
              type={val}
              setData={uploadData}
              inputTitle={key}
              refs={input}/>
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