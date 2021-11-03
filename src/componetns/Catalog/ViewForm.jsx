import React, {useEffect, useState} from 'react'
import CustomInput from '../UI/Inputs/CustomInput'
import ParamsBlock from './ParamsBlock'
import {titles} from '../Forms/CatalogFormInputsName'
import Select from '../UI/Select'
import FormButtons from '../Forms/FormButtons'
import {useDispatch} from 'react-redux'
import instance from '../../settings/defaultAxios'
import {updateCat} from '../../functions/APIRequest'

const ViewForm = ({id}) => {
  // console.log(id)

  const [data, setData] = useState({})
  const [inputType, setInputType] = useState({})
  const [params, setParams] = useState(data.params)
  const [prices, setPrices] = useState(data.prices)
  const dispatch = useDispatch()

  useEffect(() => {
    const product = instance.get(`/admin_catalog/${id}`).then((data) => {
      delete data.data.category
      delete data.data.created_at
      delete data.data.updated_at
      delete data.data.manufacturer
      setData(data.data)
      setParams(data.data.params)
      setPrices(data.data.prices)
    })
  }, [])
  useEffect(() => {
    const input = instance.get(`/admin_catalog/create?category=${data.category_id === undefined ? '' : data.category_id}`)
      .then((data) => {
        setInputType(data.data)
      })
  }, [data.category_id])

  const uploadData = (name, val) => {
    setData({
      ...data,
      [name]: val,
    })
  }
  const updateParams = (name, val) => {
    setParams({
      ...params,
      [name]: val,
    })
    setData({
      ...data,
      params: {
        ...params,
        [name]: val,
      },
    })
  }
  const updatePrices = (name, val) => {
    setPrices({
      ...prices,
      [name]: val,
    })
    setData({
      ...data,
      prices: {
        ...prices,
        [name]: val,
      },
    })
  }
  const updateAction = (e) => {
    console.log(data)
    updateCat(e, '/admin_catalog', data, id, dispatch)
  }

  return (
    <form>
      {Object.entries(inputType).map(([key, val]) => {
        if (key === 'prices' || key === 'params') {
          return (
            <ParamsBlock
              key={key}
              data={data[key]}
              title={key === 'prices' ? 'Цены' : 'Параметры'}
              updateData={key === 'prices' ? updatePrices : updateParams}
            />
          )
        }
        if (key === 'category_id' || key === 'manufacturer_id') {
          return (
            <Select
              key={key}
              val={data[key]}
              inputTitle={titles[key]}
              updateData={uploadData}
              inputName={key}
            />
          )
        }
        return (
          <CustomInput
            setData={uploadData}
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
          {
            title: 'Отмена', type: 'primary', action: () => {
            }
          },
          {title: 'Сброс', type: 'primary', action: null},
          {title: 'Подтвердить', type: 'success', action: updateAction},
        ]}
        isUpdateCatalog={true}
      />
    </form>
  )
}
export default ViewForm
