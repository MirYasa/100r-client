import React from 'react'
import styled from 'styled-components'
import CustomInput from '../componetns/UI/Inputs/CustomInput'
import SelectMultiply from '../componetns/UI/Selects/SelectMultiply'

const FormsLayout = styled.div`
width: 100%;
background-color: #f7f7f7;
display: flex;
flex-direction: column;
align-items: center;
`


const Forms = () => {
  return (
    <FormsLayout>
      <CustomInput
        setData={() => {
        }}
        type={'string'}
        inputTitle={'Text'}/>
      <CustomInput
        setData={() => {
        }}
        type={'int'}
        inputTitle={'number'}/>
      <CustomInput
        setData={() => {
        }}
        type={'bool'}
        inputTitle={'checkbox'}/>
      <CustomInput
        setData={() => {
        }}
        type={'textarea'}
        inputTitle={'textarea'}/>
      <CustomInput
        setData={() => {
        }}
        type={'select'}
        inputTitle={'select'}
        val={[1, 2, 3, 4]}/>
      <SelectMultiply
        options={[
          {value: 1, label: 'Odin'},
          {value: 2, label: 'Dva'},
          {value: 3, label: 'Tri'},
          {value: 4, label: 'Chetire'}
        ]}/>
    </FormsLayout>
  )
}
export default Forms