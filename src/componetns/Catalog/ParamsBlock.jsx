import React from 'react'
import CatalogInput from '../UI/Inputs/CatalogInput'
import styled from 'styled-components'

const Block = styled.div`
h5{
font-size: 18px;
color: #a2b0bd;
}
border-bottom: 1px solid #eceef0;
margin: 10px 0;
`

const ParamsBlock = ({data, title, updateData}) => {
  return (
    <Block>
      <h5>{title}</h5>
      {Object.entries(data).map(([key, val]) => {
        return (
          <CatalogInput
            key={key}
            inputName={key}
            inputTitle={key}
            val={val}
            type={title === 'Цены' ? 'number' : 'text'}
            setData={updateData}/>
        )
      })}
    </Block>
  )
}
export default ParamsBlock