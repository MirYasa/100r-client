import React from 'react'
import BasicForm from '../componetns/Forms/BasicForm'
import styled from 'styled-components'

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
      <BasicForm
      margin={'50px 0'}
      formData={{}}/>
    </FormsLayout>
  )
}
export default Forms