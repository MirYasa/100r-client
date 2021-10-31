import React from 'react'
import Select from 'react-select/creatable'
import {Col} from 'react-bootstrap'
import {InputContainer, InputName} from './Styles'

const ClientSelect = ({inputTitle, options, onSearch, setClient, val, setData, inputName}) => {
  // console.log(val)
  const option = []
  options.map(item => {
    option.push({value: item.id, label: inputTitle === 'Клиент' ? item.name : item.phone})
  })

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <Select
          options={option}
          defaultInputValue={val === undefined  ? '' : val}
          onChange={(e) => {
            if (e.__isNew__){
              setClient({})
              setData(inputName, e.value)
            }
            options.map(item => {
              if (item.id === e.value) {
                setClient(item)
              }
            })
          }}
          onInputChange={(e) => {
            onSearch(inputTitle, e)
          }}/>
      </Col>
    </InputContainer>

  )
}
export default ClientSelect