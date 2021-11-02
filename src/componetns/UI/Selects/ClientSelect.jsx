import React, {useEffect, useState} from 'react'
import Select from 'react-select/creatable'
import {Col} from 'react-bootstrap'
import {InputContainer, InputName} from './Styles'

const ClientSelect = ({inputTitle, options, onSearch, setClient, val, setData, inputName}) => {
  const [inputValue, setInputValue] = useState('')
  const option = []

  useEffect(() => {
    setInputValue(val)
  }, [val])


  options.map(item => {
    option.push({value: item.id, label: inputTitle === 'Клиент' ? item.name : item.phone})
  })

  // console.log(inputValue)

  // console.log(inputValue, val)
  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <Select
          options={option}
          inputValue={inputValue}
          onChange={(e) => {
            if (e.__isNew__) {
              setClient({})
              setData(inputName, e.value)
              setInputValue(e.label)
            }
            options.map(item => {
              if (item.id === e.value) {
                setClient(item)
                setInputValue(e.label)
              }
            })
          }}
          onInputChange={(e) => {
            setInputValue(e)
            onSearch(inputTitle, e)
          }}/>
      </Col>
    </InputContainer>

  )
}
export default ClientSelect