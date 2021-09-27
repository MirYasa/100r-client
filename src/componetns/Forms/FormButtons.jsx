import React from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'

const ButtonsContainer = styled.div`
width: 90%;
border-top: 1px solid #eceef0;
margin:  30px auto 0;
display: flex;
align-items: center;
justify-content: center;
`
const CustomButton = styled(Button)`
margin: 20px 10px;
background-color: ${props => props.variant === 'success' ? '#26b99a' : null};
border: ${props => props.variant === 'success' ? '#26b99a 1px solid' : null};

&:hover {
background-color: ${props => props.variant === 'success' ? '#22aa8f' : null};
border: ${props => props.variant === 'success' ? '#22aa8f 1px solid' : null};
};
`
const FormButtons = ({buttons, sendPost, sendUpdate, dataForPost, type, dispatch, url, isCreate, updateUrl}) => {
  console.log(updateUrl)
  return (
    <ButtonsContainer>
      {buttons.map((item, index) => {
        return (
          <CustomButton key={index} variant={item.type} onClick={(e) => {
            if (item.title === 'Submit') {
              if (isCreate) {
                sendPost(e, url, dataForPost, dispatch, type)
              } else {
                sendUpdate(e, updateUrl, dataForPost, dispatch, type)
              }
            }
          }}>{item.title}</CustomButton>
        )
      })}
    </ButtonsContainer>
  )
}
export default FormButtons