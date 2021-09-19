import React from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/CustomInput'
import FormTitle from './FormTitle'
import FormButtons from './FormButtons'

const FormBack = styled.div`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: 50px 0;
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
        isRequired={true}/>
      <CustomInput
        inputName={'Middle Name / Initial'}
        isRequired={false}/>
      <CustomInput
        inputName={'Gender'}
        isRequired={false}
        type={'radio'}
        radio={{
          name: 'Gender',
          values: [{title: 'Male', value: 'male'}, {title: 'Female', value: 'female'}]
        }}/>
      <CustomInput
        inputName={'Date Of Birth'}
        isRequired={false}
        type={'date'}/>
      <FormButtons
        buttons={[
          {title: 'Cancel', type: 'primary'},
          {title: 'Reset', type: 'primary'},
          {title: 'Submit', type: 'success'}]}/>
    </FormBack>
  )
}
export default BasicForm