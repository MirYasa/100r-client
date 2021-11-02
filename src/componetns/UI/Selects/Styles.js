import styled from 'styled-components'
import {Row} from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'

export const InputContainer = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`
export const InputName = styled.label`
  color: #97a6b5;
  width: 100%;
  text-align: right;
`

export const CustomSelect = styled(CreatableSelect)``

export const MyClientSelectContainer = styled(InputContainer)`
position:relative;
  div[class="col-lg-10"] {
    position:relative;
    display: flex;
    align-items: center;
  }
  input, select {
  padding: 2px 8px;
  }
  input{
  z-index: 2;
  }
  select {
  z-index: 3;
  }
`
