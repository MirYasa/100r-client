import React from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ButtonsContainer = styled.div`
width: 90%;
border-top: 1px solid #eceef0;
margin:  30px auto 0;
display: flex;
align-items: center;
justify-content: center;
`
const CustomButton = styled.input`
margin: 20px 10px;
color: white;
padding: 6px 12px;
border-radius: 4px;
background-color: ${props => props.variant === 'success' ? '#26b99a' : null};
border: ${props => props.variant === 'success' ? '#26b99a 1px solid' : null};

&:hover {
background-color: ${props => props.variant === 'success' ? '#22aa8f' : null};
border: ${props => props.variant === 'success' ? '#22aa8f 1px solid' : null};
};
`
const BackButton = styled(Button)`
margin: 20px 10px;
color: white;
padding: 6px 12px;
border-radius: 4px;
background-color: ${props => props.variant === 'success' ? '#26b99a' : null};
border: ${props => props.variant === 'success' ? '#26b99a 1px solid' : null};

&:hover {
background-color: ${props => props.variant === 'success' ? '#22aa8f' : null};
border: ${props => props.variant === 'success' ? '#22aa8f 1px solid' : null};
`

const FormButtons = ({buttons, isUpdateCatalog}) => {
  return (
    <ButtonsContainer>
      {buttons.map((item, index) => {
        if (isUpdateCatalog && item.title !== 'Сброс') {
          return (<Link to={'/admin_catalog'}>
            <BackButton key={index} variant={item.type} onClick={(e) => {
              item.action(e)
            }}>{item.title}</BackButton>
          </Link>)
        }
        if (item.title === 'Подтвердить'){
          return (
            <CustomButton type="submit" value={item.title} key={index} variant={item.type} onClick={(e) => {
              item.action(e)
            }}/>
          )
        }
        return (
          <Button style={{margin: '20px 10px'}} key={index} variant={item.type} onClick={(e) => {
            item.action(e)
          }}>{item.title}</Button>
        )
      })}
    </ButtonsContainer>
  )
}
export default FormButtons