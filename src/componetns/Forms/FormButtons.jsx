import React from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'

const ButtonsContainer = styled.div`
width: 95%;
border-top: 1px solid #eceef0;
margin:  30px auto 0;
display: flex;
align-items: center;
justify-content: center;
`
const CustomButton = styled(Button)`
margin: 15px 10px;
background-color: ${props => props.variant === 'success' ? '#26b99a' : null};
border: ${props => props.variant === 'success' ? '#26b99a 1px solid' : null};

&:hover {
background-color: ${props => props.variant === 'success' ? '#22aa8f' : null};
border: ${props => props.variant === 'success' ? '#22aa8f 1px solid' : null};
};
`
const FormButtons = ({buttons}) => {
  return (
    <ButtonsContainer>
      {buttons.map((item, index) => {
        return (
          <CustomButton key={index} variant={item.type}>{item.title}</CustomButton>
        )
      })}
    </ButtonsContainer>
  )
}
export default FormButtons