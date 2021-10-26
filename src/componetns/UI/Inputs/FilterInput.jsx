import React from "react"
import { FilterInputContainer } from "./Styles"

const FilterInput = ({ title, inputName, setValue }) => {
  return (
    <FilterInputContainer>
      <label htmlFor="">{title}</label>
      <input
        type="text"
        placeholder={title}
        onInput={(e) => {
          setValue(inputName, e.target.value)
        }}
      />
    </FilterInputContainer>
  )
}

export default FilterInput
