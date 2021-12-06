import React from 'react'
import {Button} from 'react-bootstrap'
import {ButtonsContainer} from './FormStyles'

const FormButtons = ({buttons}) => {
  return (
    <ButtonsContainer>
      {buttons.map((item, index) => {
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