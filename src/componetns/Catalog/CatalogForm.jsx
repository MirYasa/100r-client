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
    // const {product_id} = useSelector(state => state.catalog)
    const [allData, setAllData] = useState({})
    const titlesMap = new Map(Object.entries(titles))
    const [params, setParams] = useState(inputData.params)
    const [paramsFields, setFields] = useState({})
    const [prices, setPrices] = useState(inputData.prices)
    const [prodId, setProdId] = useState(0)
    const dispatch = useDispatch()
    const [kek, set] = useState([])
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

    const createAction = async (e) => {
        console.log(allData)
        e.preventDefault()
        close()
        try {
            await instance.post('/admin_catalog', allData)
                .then((res) => {
                    getCatalog(dispatch, 'GET_CATALOG', '/admin_catalog')
                    return res
                })
                .then(res => {
                    if (kek.length === 0) return

                    for (let i = 0; i < kek.length; i++) {
                        const imageData = new FormData()

                        imageData.append('src', kek[i])
                        imageData.append('product_id', res.data.id)
                        imageData.append('is_main', 'false')
                        setTimeout(() => {
                            defaultAxios.post('product_files', imageData)
                        }, 50)
                    }
                })
        } catch (e) {
            console.log(e)
        }
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
                <Tab eventKey='photo' title={'Изображения'}>
                    <PhotoTab setKek={set}/>
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