import React from "react"
import { CustomButton, PaginationListContainer } from "./Styles"

const PaginationList = ({ count, updatePage }) => {
  const buttons = []
  for (let i = 0; i < Math.ceil(count / 20); i++) {
    buttons.push(
      <CustomButton
        key={i}
        onClick={() => {
          updatePage(i)
        }}
      >
        {i + 1}
      </CustomButton>
    )
  }
  return <PaginationListContainer>{buttons}</PaginationListContainer>
}
export default PaginationList
