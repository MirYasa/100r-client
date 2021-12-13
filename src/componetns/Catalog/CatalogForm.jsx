import React, {useEffect, useState} from 'react'
import {AddCatalog} from '../../functions/APIRequest'
import FormButtons from '../FormButtons'
import {useDispatch, useSelector} from 'react-redux'
import {names, titles} from './CatalogFormInputsName'
import {useLocation} from 'react-router-dom'
import {getInputs} from '../../store/actions/inputDataAction'
import {FormBack, ParamsBlock} from '../FormStyles'
import ParamTab from "./Tabs/ParamTab";
import ProductTab from "./Tabs/ProductTab";
import {Tab, Tabs} from "react-bootstrap";
import {logDOM} from "@testing-library/react";

const CatalogForm = ({isCreate, onClose}) => {
    const {inputData} = useSelector(state => state.inputData)
    const [allData, setAllData] = useState({})
    const titlesMap = new Map(Object.entries(titles))
    const [params, setParams] = useState(inputData.params)
    const [paramsFields, setFields] = useState({})
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

           inputData.params.map(item => {
               if (stepParams[item.group_name]){
                   stepParams = {
                       ...stepParams,
                       [item.group_name]: [...stepParams[item.group_name] , item]
                   }
               }
               else {
                   stepParams = {
                       ...stepParams,
                       [item.group_name]: [item]
                   }
               }
           })
        }
        // console.log(stepParams)
        setPrices(stepPrices)
        setFields(stepParams)
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
        // console.log(allData)
        e.preventDefault()
        close()
        AddCatalog(dispatch, url, allData)
    }

    return (
        <FormBack>
            <Tabs defaultActiveKey={'product'} id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey='product' title="Продукт">
                    <ProductTab
                        isCreate={isCreate}
                        allData={allData}
                        prices={prices}
                        titlesMap={titlesMap}
                        uploadData={uploadData}
                        uploadPrices={uploadPrices}
                    />
                </Tab>
                <Tab eventKey='param' title="Параметры">
                    <ParamTab
                        allData={allData}
                        isCreate={isCreate}
                        params={paramsFields}
                        uploadParams={uploadParams}/>
                </Tab>
            </Tabs>
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