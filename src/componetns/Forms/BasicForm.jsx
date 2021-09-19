import React from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/CustomInput'
import FormTitle from './FormTitle'
import FormButtons from './FormButtons'

const FormBack = styled.div`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin-top: 50px;
`

const BasicForm = () => {
  return (
    <FormBack>
      <FormTitle
        title={'Title Form'}
        subTitle={'Subtitle Form'}/>
      <CustomInput
        inputName={'First Name'}
        isRequired={true}/>
      <CustomInput
        inputName={'Second Name'}
        isRequired={false}/>
      <FormButtons
        buttons={[
          {title: 'Cancel', type: 'primary'},
          {title: 'Reset', type: 'primary'},
          {title: 'Submit', type: 'success'}]}/>
    </FormBack>
  )
}
export default BasicForm