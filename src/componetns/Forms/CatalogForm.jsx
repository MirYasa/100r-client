import React, {useEffect, useState} from 'react'
import {AddCatalog} from '../../functions/APIRequest'
import FormButtons from './FormButtons'
import styled from 'styled-components'
import {Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import CatalogInput from '../UI/Inputs/CatalogInput'
import {names, titles} from './CatalogFormInputsName'
import {useLocation} from 'react-router-dom'
import {getInputs} from '../../store/actions/inputDataAction'

const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
`
const Block = styled.div`
h5{
font-size: 18px;
color: #a2b0bd;
}
border-bottom: 1px solid #eceef0;
margin: 10px 5px;
`

const CatalogForm = ({isCreate, onClose}) => {
  const {inputData} = useSelector(state => state.inputData)
  const [allData, setAllData] = useState({})
  const titlesMap = new Map(Object.entries(titles))
  const [params, setParams] = useState(inputData.params)
  const [prices, setPrices] = useState(inputData.prices)
  const dispatch = useDispatch()
  const url = useLocation().pathname

  console.log(allData)
  useEffect(() => {
    getInputs(dispatch, 'GET_INPUT_DATA', `/admin_catalog/create?category=${allData.category_id === undefined ? '' : allData.category_id}`)
  }, [allData.category_id])

  useEffect(() => {
    setAllData({
      ...allData,
      ['params']: {},
      ['prices']: {},
      active: false
    })
    setPrices(inputData.prices)
    setParams(inputData.params)
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
      <Block>
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
      </Block>
      <Block>
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
      </Block>
      {Object.entries(names).map(([key, val]) => {
        // console.log(allData[key], key)
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