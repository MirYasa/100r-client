import React from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'

const PaginationListContainer = styled.div`
  margin: 10px 0;
`
const CustomButton = styled(Button)`
margin: 0 5px;
`
const PaginationList = ({count, updatePage}) => {
  const buttons = []
  for (let i = 0; i < count/20; i++) {
    buttons.push(<CustomButton key={i} onClick={() => {updatePage(i)}}>{i+1}</CustomButton>)
  }
    return (
      <PaginationListContainer>
        {
          buttons
        }
      </PaginationListContainer>
    )
}
export default PaginationList