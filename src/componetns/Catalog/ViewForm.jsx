import React, {useEffect, useState} from 'react'
import {names, titles} from '../Forms/CatalogFormInputsName'
import FormButtons from '../Forms/FormButtons'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../../settings/defaultAxios'
import {updateCat} from '../../functions/APIRequest'
import {getInputs} from '../../store/actions/inputDataAction'
import CatalogInput from '../UI/Inputs/CatalogInput'
import {FormBack, ParamsBlock} from '../Forms/FormStyles'

const ViewForm = ({id, close}) => {
  const [data, setData] = useState({})
  const [params, setParams] = useState(data.params)
  const [prices, setPrices] = useState(data.prices)
  const [newParams, setNewParams] = useState(false)
  const [emptyInput, setEmptyInput] = useState(false)
  const {inputData} = useSelector(state => state.inputData)
  const dispatch = useDispatch()

  useEffect(() => {
    instance.get(`/admin_catalog/${id}`)
      .then((response) => {
        delete response.data.category
        delete response.data.created_at
        delete response.data.updated_at
        delete response.data.manufacturer
        setData(response.data)
        setParams(response.data.params)
        setPrices(response.data.prices)
        setNewParams(true)
      })
  }, [])

  useEffect(() => {
    if (data.category_id !== undefined) {
      getInputs(dispatch, 'GET_INPUT_DATA', `/admin_catalog/create?category=${data.category_id}`)
      if (newParams) {
        let stepPrices = {}
        let stepParams = {}
        Object.keys(inputData.prices).map((key) => {
          stepPrices = {
            ...stepPrices,
            [key]: ''
          }
        })
        Object.keys(inputData.params).map((key) => {
          stepParams = {
            ...stepParams,
            [key]: ''
          }
        })
        setPrices(stepPrices)
        setParams(stepParams)
        setEmptyInput(true)
      }
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
    close(false)
    updateCat(e, '/admin_catalog', data, id, dispatch)
  }

  return (
    <FormBack>
      <ParamsBlock>
        <h5>Параметры</h5>
        {Object.entries(params === undefined ? {} : params).map(([key, val]) => {
          return (
            <CatalogInput
              key={key}
              inputName={key}
              inputTitle={key}
              val={emptyInput ? '' : data.params[key]}
              type={val}
              setData={updateParams}/>
          )
        })}
      </ParamsBlock>
      <ParamsBlock>
        <h5>Цены</h5>
        {Object.entries(prices === undefined ? {} : prices).map(([key, val]) => {
          return (
            <CatalogInput
              key={key}
              inputName={key}
              inputTitle={key}
              val={emptyInput ? '' : data.prices[key]}
              type={val}
              setData={updatePrices}/>
          )
        })}
      </ParamsBlock>
      {Object.entries(names).map(([key, val]) => {
        return (
          <CatalogInput
            key={key}
            inputName={key}
            val={data[key]}
            type={val}
            inputTitle={titles[key]}
            setData={uploadData}/>
        )
      })
      }
      <FormButtons
        buttons={[
          {
            title: 'Отмена', type: 'primary', action: () => {
              close(false)
            }
          },
          {title: 'Сброс', type: 'primary', action: null},
          {title: 'Подтвердить', type: 'success', action: updateAction}]}
      />
    </FormBack>
  )
}
export default ViewForm