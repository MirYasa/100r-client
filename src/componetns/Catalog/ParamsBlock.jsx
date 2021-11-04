import React from "react"
import CatalogInput from "../UI/Inputs/CatalogInput"
import { Block } from "./Styles"
const ParamsBlock = ({ data, title, updateData }) => {

  console.log(data)
  return (
    <Block>
      <h5>{title}</h5>
      {data !== undefined ? Object.entries(data).map(([key, val]) => {
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
      }) : null}
    </Block>
  )
}
export default ParamsBlock
