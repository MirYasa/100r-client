import styled from 'styled-components'
import {Button, Form} from 'react-bootstrap'

export const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
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
`
export const CustomButton = styled.input`
margin: 20px 10px;
color: white;
padding: 6px 12px;
border-radius: 4px;
background-color: ${props => props.variant === 'success' ? '#26b99a' : null};
border: ${props => props.variant === 'success' ? '#26b99a 1px solid' : null};

&:hover {
background-color: ${props => props.variant === 'success' ? '#22aa8f' : null};
border: ${props => props.variant === 'success' ? '#22aa8f 1px solid' : null};
};
`
export const BackButton = styled(Button)`
margin: 20px 10px;
color: white;
padding: 6px 12px;
border-radius: 4px;
background-color: ${props => props.variant === 'success' ? '#26b99a' : null};
border: ${props => props.variant === 'success' ? '#26b99a 1px solid' : null};

&:hover {
background-color: ${props => props.variant === 'success' ? '#22aa8f' : null};
border: ${props => props.variant === 'success' ? '#22aa8f 1px solid' : null};
`
