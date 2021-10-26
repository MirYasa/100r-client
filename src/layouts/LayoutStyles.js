import styled from "styled-components"
import { Button } from "react-bootstrap"

export const Container = styled.div`
  width: 95%;
  margin: 50px auto 0;
`
export const TableContainer = styled.div`
  width: 95%;
  margin: 50px auto 0;
  overflow-x: scroll;
`
export const CreateButton = styled(Button)`
  margin-bottom: 20px;
  color: #3f5367;
  position: sticky;
  left: 0;
  &:hover {
    color: #3f5367;
  }
`
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  button {
    margin: 0 20px 0 0;
  }
`
