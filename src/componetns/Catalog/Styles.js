import styled from "styled-components"
import { Link } from "react-router-dom"

export const Back = styled(Link)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`

//Params Block
export const Block = styled.div`
  h5 {
    font-size: 18px;
    color: #a2b0bd;
  }
  border-bottom: 1px solid #eceef0;
  margin: 10px 0;
`
