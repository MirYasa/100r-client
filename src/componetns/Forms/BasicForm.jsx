import React from 'react'
import styled from 'styled-components'
import CustomInput from '../UI/CustomInput'
import FormTitle from './FormTitle'
import FormButtons from './FormButtons'
import {Form} from 'react-bootstrap'
import TextArea from '../UI/TextArea'

const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
`


const BasicForm = ({margin}) => {
  return (
    <FormBack margin={margin}>
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
      <CustomInput
        inputName={'Select Custom'}
        isRequired={false}
        type={'select'}/>
        <TextArea/>
      <FormButtons
        buttons={[
          {title: 'Cancel', type: 'primary'},
          {title: 'Reset', type: 'primary'},
          {title: 'Submit', type: 'success'}]}/>
    </FormBack>
  )
}
export default BasicForm