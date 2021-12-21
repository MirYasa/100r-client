import React, {useEffect, useState} from 'react'
import FormButtons from '../FormButtons'
import {useDispatch, useSelector} from 'react-redux'
import instance from '../../settings/defaultAxios'
import {updateCat, updateImages} from '../../functions/APIRequest'
import {getInputs} from '../../store/actions/inputDataAction'
import {FormBack} from '../FormStyles'
import ParamTab from "./Tabs/ParamTab";
import ProductTab from "./Tabs/ProductTab";
import {Tab, Tabs} from "react-bootstrap";
import PhotoTab from "./Tabs/PhotoTab";
import defaultAxios from "../../settings/defaultAxios";

const ViewForm = ({id, close, isShow}) => {
    const [data, setData] = useState({})
    const [params, setParams] = useState(data.params)
    const [paramFields, setFields] = useState({})
    const [prices, setPrices] = useState(data.prices)
    const [newParams, setNewParams] = useState(false)
    const [emptyInput, setEmptyInput] = useState(false)
    const {inputData} = useSelector(state => state.inputData)
    const [dataImage, setDataImage] = useState([])
    const dispatch = useDispatch()
    const [imagesData, set] = useState([])

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
        defaultAxios.get(`/product_files/${id}`)
            .then(response => {
                setDataImage(response.data.sort((a, b) => b.is_main - a.is_main))
            })
    }, [])

    useEffect(() => {
        let stepParams = {}
        if (inputData.params) {
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
        setFields(stepParams)
    }, [inputData.params])


    useEffect(() => {
        if (data.category_id !== undefined) {
            getInputs(dispatch, 'GET_INPUT_DATA', `/admin_catalog/create?category=${data.category_id}`)
            if (newParams) {
                let stepPrices = {}
                Object.keys(inputData.prices).map((key) => {
                    stepPrices = {
                        ...stepPrices,
                        [key]: ''
                    }
                })
                setPrices(stepPrices)
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
        updateImages(dataImage, imagesData, id)
    }

    return (
        <FormBack>
            <Tabs defaultActiveKey={'product'}>
                <Tab eventKey={'product'} title={'Продукт'}>
                    <ProductTab
                        emptyInput={emptyInput}
                        isCreate={false}
                        uploadPrices={updatePrices}
                        allData={data}
                        prices={prices}
                        uploadData={uploadData}
                    />
                </Tab>
                <Tab eventKey={'param'} title={'Параметры'}>
                    <ParamTab
                        isCreate={false}
                        uploadParams={updateParams}
                        params={paramFields}
                        data={params}/>
                </Tab>
                <Tab eventKey='photo' title={'Изображения'}>
                    <PhotoTab setKek={set} isUpdate={true} data={dataImage} setData={setDataImage}/>
                </Tab>
            </Tabs>
            {
                isShow ? null : <FormButtons
                    buttons={[
                        {
                            title: 'Отмена', type: 'primary', action: () => {
                                close(false)
                            }
                        },
                        {title: 'Сброс', type: 'primary', action: null},
                        {title: 'Подтвердить', type: 'success', action: updateAction}]}
                />
            }
        </FormBack>
    )
}
export default ViewForm