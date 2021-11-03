import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import {Col} from 'react-bootstrap'
import {InputName, InputContainer} from './Styles'

const MySelect = ({options, inputTitle, val, inputName, setData}) => {
  const [option, setOption] = useState([{value: 0, label: 'Выбрать'}])
  const [defVal, setDefVal] = useState(0)

  // console.log( inputName, option)

  useEffect(() => {
    setDefVal(val === undefined ? 0 : val)
  }, [val])

  useEffect(() => {
    options.map((item) => {
      setOption(prev => [...prev, {
        value: item.id,
        label: item.name,
      }])
    })
  }, [options])

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <Select
          options={option.sort((a, b) => {
           return a.value - b.value
          })}
          value={option[defVal]}
          onChange={(e) => {
            setData(inputName, e.value)
          }}
        />
      </Col>
    </InputContainer>
  )
}
export default MySelect
