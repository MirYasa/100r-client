import React from "react"
import CustomInput from "../UI/Inputs/CustomInput"
import ParamsBlock from "./ParamsBlock"
import { titles } from "../Forms/CatalogFormInputsName"
import Select from "../UI/Select"
import FormButtons from "../Forms/FormButtons"

const ViewForm = ({
  data,
  inputTypes,
  updateData,
  updatePrice,
  updateParams,
  updateAction,
}) => {
  return (
    <form>
      {Object.entries(inputTypes).map(([key, val]) => {
        if (key === "prices" || key === "params") {
          return (
            <ParamsBlock
              key={key}
              data={data[key]}
              title={key === "prices" ? "Цены" : "Параметры"}
              updateData={key === "prices" ? updatePrice : updateParams}
            />
          )
        }
        if (key === "category_id" || key === "manufacturer_id") {
          return (
            <Select
              key={key}
              val={data[key]}
              inputTitle={titles[key]}
              updateData={updateData}
              inputName={key}
            />
          )
        }
        return (
          <CustomInput
            setData={updateData}
            type={val}
            key={key}
            val={data[key]}
            inputTitle={titles[key]}
            inputName={key}
          />
        )
      })}
      <FormButtons
        buttons={[
          { title: "Отмена", type: "primary", action: () => {} },
          { title: "Сброс", type: "primary", action: null },
          { title: "Подтвердить", type: "success", action: updateAction },
        ]}
        isUpdateCatalog={true}
      />
    </form>
  )
}
export default ViewForm
