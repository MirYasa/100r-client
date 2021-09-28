import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'

const TextAreaContainer = styled.div`
width: 100%;
margin: 5px auto;
`

const TextArea = ({val, setData, inputName}) => {
  const [value, setValue] = useState(val)
  return (
    <TextAreaContainer>
      <ReactQuill
        theme={'snow'}
        value={value}
        onChange={(e) => {
          setValue(e)
          setData(inputName, e.replace(/^(<p>)|(<\/p>)$/gm, ''))
        }}/>
    </TextAreaContainer>
  )
}
export default TextArea