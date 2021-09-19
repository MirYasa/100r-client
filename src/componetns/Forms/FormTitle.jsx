import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  width: 90%;
  height: 50px;
  border-bottom: 1px solid #eceef0;
  margin:  0 auto 30px;
  display: flex;
  align-items: flex-end;
`

const FlexDiv = styled.div`
display: flex;
align-items: flex-end;
color: #7e90a3;
`
const Title = styled.h2`
font-size: 18px;
margin: 0 0 10px 0;
`
const Subtitle = styled.h3`
font-size: 16px;
margin: 0 0 10px 10px;
`
const FormTitle = ({title, subTitle}) => {
  return (
    <TitleContainer>
      <FlexDiv>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
      </FlexDiv>
    </TitleContainer>
  )
}
export default FormTitle