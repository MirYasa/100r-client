import styled from "styled-components"
import { Button } from "react-bootstrap"

export const PaginationListContainer = styled.div`
  margin: 10px 0;
`
export const CustomButton = styled(Button)`
  margin: 0 5px;
`

export const FilterContainer = styled.div`
  width: 100%;
  height: 110px;
  border: 2px solid #f2f2f2;
  border-radius: 10px;

  ul {
    margin: 0 0 0 0;
    padding: 0 25px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    justify-content: space-between;
  }
`
export const FilterTitle = styled.div`
  background-color: #f2f2f2;
  width: inherit;
  height: 35px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 19px;
  color: #3f5367;
  padding: 0 15px;
`
