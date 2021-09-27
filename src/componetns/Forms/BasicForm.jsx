import React, {useState} from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/CustomInput'
import FormTitle from './FormTitle'
import FormButtons from './FormButtons'
import {Form} from 'react-bootstrap'
import {createContent, update} from '../../functions/confirm'

const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
`
const BasicForm = ({margin, formData, isCreate, dispatch, url, formDataValue}) => {
  const [allData, setAllData] = useState({})
  const uploadData = (name, val) => {
    setAllData({
      ...allData,
      [name]: val
    })
  }

  console.log(formData)

  return (
    <FormBack margin={margin}>
      <FormTitle
        title={'Title Form'}
        subTitle={'Subtitle Form'}/>
      {
        Object.entries(formData).map(([key, val]) => {
          if (isCreate)
            return (
              <CustomInput
                key={key}
                inputName={key}
                isRequired={false}
                type={val}
                setData={uploadData}/>
            )
          return (
            <CustomInput
              key={key}
              inputName={key}
              isRequired={false}
              val={formDataValue[key]}
              type={val}
              setData={uploadData}/>
          )
        })
      }
      <FormButtons
        buttons={[
          {title: 'Cancel', type: 'primary'},
          {title: 'Reset', type: 'primary'},
          {title: 'Submit', type: 'success'}]}
        sendPost={createContent}
        sendUpdate={update}
        dataForPost={allData}
        type={'GET_CONTENT'}
        dispatch={dispatch}
        url={url}
        updateUrl={url}
        isCreate={isCreate}/>
    </FormBack>
  )
}
export default BasicForm