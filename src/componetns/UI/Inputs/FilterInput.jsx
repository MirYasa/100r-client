import React from "react"
import { FilterInputContainer } from "./Styles"

const FilterInput = ({ title }) => {
  return (
    <FilterInputContainer>
      <label htmlFor="">{title}</label>
      <input type="text" placeholder={title} />
    </FilterInputContainer>
  )
}

export default FilterInput
