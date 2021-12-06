import styled from 'styled-components'
import {Form} from 'react-bootstrap'

export const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
position: relative;
min-height: 100vh;
`
export const TabBack = styled.div`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: 0 auto;
position:relative;
min-height: 100vh;
  h5{
  margin-left: 10px;
  }
`

export const ParamsBlock = styled.div`
h5{
font-size: 18px;
color: #a2b0bd;
}
border-bottom: 1px solid #eceef0;
margin: 10px 5px;
`

export const ButtonsContainer = styled.div`
width: 90%;
border-top: 1px solid #eceef0;
margin:  30px auto 0;
display: flex;
align-items: center;
justify-content: center;
//position: absolute;
//bottom: 10px;
//left: 50%;
//transform: translate(-50%,0);
`