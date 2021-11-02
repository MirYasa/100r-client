import React from 'react'
import {Col} from 'react-bootstrap'
import {InputName, MyClientSelectContainer} from './Styles'


const MyClientSelect = ({inputTitle, options, onSearch, setClient, val, setData, inputName}) => {
  return (
    <MyClientSelectContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <input type="text" onInput={(e) => {
          onSearch(inputName, e.target.value)
        }}/>
        <select
          name=""
          id=""
          onChange={(e) => {
            options.map(item => {
              if (item.id === Number(e.target.value)) {
                setClient(item)
              }
            })
          }}
        >
          {options.map((item) => {
            return (
              <option key={item.id} value={item.id}>{inputName === 'client_name' ? item.name : item.phone}</option>)
          })}
        </select>
      </Col>
    </MyClientSelectContainer>
  )
}
export default MyClientSelect