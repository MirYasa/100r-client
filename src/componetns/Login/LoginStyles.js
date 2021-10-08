import styled from 'styled-components'
import {Form} from 'react-bootstrap'

export const FormContainer = styled(Form)`
width: 400px;
color: #73879C;
position: fixed;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
a {
text-decoration: none;
&:hover{text-decoration: underline};
}
`
export const ButtonsRow = styled(Form.Group)`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
border-bottom: 1px solid #D8D8D8;
a,button {
margin: 0 10px;
}
`
export const FooterContainer = styled.div`
display: flex;
margin: 10px 0;
justify-content: center;
  
  p,a {
  margin: 0 10px;
  }
`

//LoginTitle
export const Title = styled.h1`
letter-spacing: -0.05em;
margin: 10px 0 30px;
font-size: 25px;
text-align: center;
text-shadow: 0 1px 0 #fff;

&:before, :after {
content: "";
height: 1px;
position: absolute;
top: 27px;
width: 20%;
}
&:before {
    background: linear-gradient(to left, #7e7e7e 0%, #fff 100%);
    left: 0;
}
&:after{
background: linear-gradient(to right, #7e7e7e 0%, #fff 100%);
right: 0;
}
`