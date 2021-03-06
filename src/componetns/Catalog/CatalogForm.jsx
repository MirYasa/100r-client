import React, {useEffect, useState} from 'react'
import {AddCatalog} from '../../functions/APIRequest'
import FormButtons from '../FormButtons'
import {useDispatch, useSelector} from 'react-redux'
import {titles} from './CatalogFormInputsName'
import {useLocation} from 'react-router-dom'
import {getInputs} from '../../store/actions/inputDataAction'
import {FormBack} from '../FormStyles'
import ParamTab from "./Tabs/ParamTab";
import ProductTab from "./Tabs/ProductTab";
import {Tab, Tabs} from "react-bootstrap";
import PhotoTab from "./Tabs/PhotoTab";
import instance from "../../settings/defaultAxios";
import {getCatalog} from "../../store/actions/catalogAction";
import defaultAxios from "../../settings/defaultAxios";


const CatalogForm = ({isCreate, onClose}) => {
    const {inputData} = useSelector(state => state.inputData)
    const [allData, setAllData] = useState({})
    const titlesMap = new Map(Object.entries(titles))
    const [params, setParams] = useState(inputData.params)
    const [paramsFields, setFields] = useState({})
    const [prices, setPrices] = useState(inputData.prices)
    const dispatch = useDispatch()
    const [imagesData, set] = useState([])
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
                if (stepParams[item.group_name]) {
                    stepParams = {
                        ...stepParams,
                        [item.group_name]: [...stepParams[item.group_name], item]
                    }
                } else {
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
        e.preventDefault()
        close()
        if (allData.hasOwnProperty('params')) {
            let modifiedParams = {}
            const modifiedData = Object.entries(allData.params).filter(([key, item]) => item.trim() !== '')
            modifiedData.map(item => {
                return modifiedParams = {
                    ...modifiedParams,
                    [item[0]]: item[1]
                }
            })
            AddCatalog(dispatch, {...allData, params: modifiedParams.length !== 0 ? modifiedParams : {}}, imagesData)
        } else {
            AddCatalog(dispatch, {...allData, params: {}}, imagesData)
        }
    }

    return (
        <FormBack>
            <Tabs defaultActiveKey={'product'} id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey='product' title="??????????????">
                    <ProductTab
                        isCreate={isCreate}
                        allData={allData}
                        prices={prices}
                        titlesMap={titlesMap}
                        uploadData={uploadData}
                        uploadPrices={uploadPrices}
                    />
                </Tab>
                <Tab eventKey='param' title="??????????????????">
                    <ParamTab
                        allData={allData}
                        isCreate={isCreate}
                        params={paramsFields}
                        uploadParams={uploadParams}/>
                </Tab>
                <Tab eventKey='photo' title={'??????????????????????'}>
                    <PhotoTab setKek={set}/>
                </Tab>
            </Tabs>
            <FormButtons
                buttons={[
                    {title: '????????????', type: 'primary', action: close},
                    {title: '??????????', type: 'primary', action: null},
                    {title: '??????????????????????', type: 'success', action: createAction}]}
            />
        </FormBack>
    )
}
export default CatalogForm