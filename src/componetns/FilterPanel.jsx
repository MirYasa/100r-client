import React from "react"
import { FilterContainer, FilterTitle } from "./Styles"
import FilterInput from "../componetns/UI/Inputs/FilterInput"

const inputs = [
  { title: "№ Заказа" },
  { title: "Клиент" },
  { title: "Статус заказа" },
  { title: "Дата добавления" },
]

const FilterPanel = () => {
  return (
    <FilterContainer>
      <FilterTitle>Фильтр</FilterTitle>
      <ul>
        {inputs.map((item, index) => {
          return <FilterInput key={index} title={item.title} />
        })}
      </ul>
    </FilterContainer>
  )
}

export default FilterPanel
