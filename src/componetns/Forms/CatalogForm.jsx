import React, {useEffect, useState} from 'react'
import {AddCatalog} from '../../functions/APIRequest'
import FormButtons from './FormButtons'
import {useDispatch, useSelector} from 'react-redux'
import CatalogInput from '../UI/Inputs/CatalogInput'
import {names, titles} from './CatalogFormInputsName'
import {useLocation} from 'react-router-dom'
import {getInputs} from '../../store/actions/inputDataAction'
import {FormBack, ParamsBlock} from './FormStyles'

const CatalogForm = ({isCreate, onClose}) => {
  const {inputData} = useSelector(state => state.inputData)
  const [allData, setAllData] = useState({})
  const titlesMap = new Map(Object.entries(titles))
  const [params, setParams] = useState(inputData.params)
  const [prices, setPrices] = useState(inputData.prices)
  const dispatch = useDispatch()
  const url = useLocation().pathname

  useEffect(() => {
    getInputs(dispatch, 'GET_INPUT_DATA', `/admin_catalog/create?category=${allData.category_id === undefined ? '' : allData.category_id}`)
  }, [allData.category_id])

  useEffect(() => {
    setAllData({
      ...allData,
      active: false
    })
    let stepPrices = {}
    let stepParams = {}
    if (inputData.prices && inputData.params) {
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
    }
    setPrices(stepPrices)
    setParams(stepParams)
  }, [inputData])

  const uploadData = (name, val) => {
    setAllData({
      ...allData,
      [name]: val
    })
  }
  const uploadParams = (name, val) => {
    setParams({
      ...params,
      [name]: val
    })
    setAllData({
      ...allData,
      'params': {
        ...params,
        [name]: val
      }
    })
  }
  const uploadPrices = (name, val) => {
    setPrices({
      ...prices,
      [name]: val
    })
    setAllData({
      ...allData,
      'prices': {
        ...prices,
        [name]: val
      }
    })
  }
  const close = () => {
    onClose(false)
  }
  const createAction = (e) => {
    e.preventDefault()
    close()
    AddCatalog(dispatch, url, allData)
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
              val={isCreate ? undefined : allData.params[key]}
              type={val}
              setData={uploadParams}/>
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
              val={isCreate ? undefined : allData.prices[key]}
              type={val}
              setData={uploadPrices}/>
          )
        })}
      </ParamsBlock>
      {Object.entries(names).map(([key, val]) => {
        return (
          <CatalogInput
            key={key}
            inputName={key}
            val={isCreate ? val === 'select' ? allData[key] : undefined : allData[key]}
            type={val}
            inputTitle={titlesMap.get(key)}
            setData={uploadData}/>
        )
      })
      }
      <FormButtons
        buttons={[
          {title: 'Отмена', type: 'primary', action: close},
          {title: 'Сброс', type: 'primary', action: null},
          {title: 'Подтвердить', type: 'success', action: createAction}]}
      />
    </FormBack>
  )
}
export default CatalogForm