import React, { useState } from "react"
import { FilterContainer, FilterTitle } from "./Styles"
import FilterInput from "../componetns/UI/Inputs/FilterInput"

const inputs = [
  { title: "№ Заказа", input: "order_id" },
  { title: "Клиент", input: "client" },
  { title: "Статус заказа", input: "order_status" },
  { title: "Дата добавления", input: "date_ad" },
]

const FilterPanel = () => {
  const [data, setData] = useState({
    order_id: "",
    client: "",
    order_status: "",
    date_ad: "",
  })

  const uploadData = (name, val) => {
    setData({
      ...data,
      [name]: val,
    })
  }

  return (
    <FilterContainer>
      <FilterTitle>Фильтр</FilterTitle>
      <ul>
        {inputs.map((item, index) => {
          return (
            <FilterInput
              key={index}
              title={item.title}
              inputName={item.input}
              setValue={uploadData}
            />
          )
        })}
      </ul>
    </FilterContainer>
  )
}

export default FilterPanel
