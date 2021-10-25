import React from "react"
import CatalogInput from "../UI/Inputs/CatalogInput"
import { Block } from "./Styles"
const ParamsBlock = ({ data, title, updateData }) => {
  return (
    <Block>
      <h5>{title}</h5>
      {Object.entries(data).map(([key, val]) => {
        return (
          <CatalogInput
            key={key}
            inputName={key}
            inputTitle={key}
            val={val}
            type={title === "Цены" ? "number" : "text"}
            setData={updateData}
          />
        )
      })}
    </Block>
  )
}
export default ParamsBlock
