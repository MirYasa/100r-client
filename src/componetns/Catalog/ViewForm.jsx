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
  const [data, setData] = useState({})
  const [inputType, setInputType] = useState(
    {
      params: {
        asperiores: 'string',
        aut: 'string',
        perferendis: 'string',
        repellendus: 'string'
      },
      prices: {
        MasterCard: 'float',
        JCB: 'float',
        Visa: 'float'
      },
      full_description: 'textarea',
      full_name: 'string',
      short_description: 'textarea',
      short_name: 'string',
      manufacturer_id: 'int',
      category_id: 'int',
      external_id: 'int',
    }
  )

  const [params, setParams] = useState(data.params)
  const [prices, setPrices] = useState(data.prices)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // console.log(inputType)

  useEffect(() => {
    instance.get(`/admin_catalog/${id}`)
      .then((response) => {
        delete response.data.category
        delete response.data.created_at
        delete response.data.updated_at
        delete response.data.manufacturer
        // console.log(response.data)
        setData(response.data)
        setParams(response.data.params)
        setPrices(response.data.prices)
      })
    setLoading(false)
  }, [])

  useEffect(() => {
    if (data.category_id !== undefined) {
      instance.get(`/admin_catalog/create?category=${data.category_id}`)
        .then((data) => {
          setInputType(data.data)
        })
    }
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
              data={loading ? inputType[key] : data[key]}
              title={key === 'prices' ? 'Цены' : 'Параметры'}
              updateData={key === 'prices' ? updatePrices : updateParams}
            />
          )
        }
        if (key === 'category_id' || key === 'manufacturer_id') {
          return (
            <Select
              key={key}
              val={loading ? inputType[key] : data[key]}
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
            val={loading ? inputType[key] : data[key]}
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
