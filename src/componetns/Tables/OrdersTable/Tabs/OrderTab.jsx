import React, {useEffect, useMemo, useState} from 'react'
import {useForm} from 'react-hook-form'
import MySelect from '../../../UI/Selects/MySelect'
import instance from '../../../../settings/defaultAxios'
import OrderSelect from '../../../UI/Selects/OrderSelect'
import {TabBack} from '../../../Forms/FormStyles'
import StrippedTable from '../../StrippedTable'
import CustomOrderInput from '../../../UI/Inputs/CustomOrderInput'

const OrderTab = ({
                      margin,
                      isCreate,
                      names,
                      inputs,
                      ready,
                      allData,
                      uploadData,
                      options,
                      setOptions,
                      selVal,
                      products,
                      setProducts,
                      openProduct,
                      setAllData
                  }) => {
    const [tableProducts, setTableProducts] = useState([])
    const [add, setAdd] = useState(false)
    const [addProd, setAddProd] = useState(false)
    const fullPrice = products.map((product) => Number(product.fact_price) * Number(product.quantity))

    // useEffect(() => {
    //     if (fullPrice.length !== 0) {
    //         uploadData('price', fullPrice.reduce((prev, cur) => prev + cur))
    //     }
    // }, [products])

    useEffect(() => {
        if (products === undefined || products.length === 0) {
            return null
        } else {
            const arr = [...products]
            const current = arr.pop()
            if (add) {
                instance.get(`admin_catalog/${current.id}`)
                    .then((response) => {
                        let repeat = false
                        tableProducts.map(item => {
                            if (item.product_id === response.data.product_id) {
                                repeat = true
                            }
                        })
                        if (!repeat) {
                            setTableProducts([...tableProducts, response.data])
                        }
                    })
            }
        }
        setAllData({
            ...allData,
            'products': products,
            'price': fullPrice.reduce((prev, cur) => prev + cur)
        })
        // uploadData('products', products)
    }, [products])
    useEffect(() => {
        if (!isCreate) {
            if (ready) {
                setAddProd(true)
            }
        }
    }, [ready])
    useEffect(() => {
        if (ready || isCreate) {
            products.map(item => {
                if (item)
                    instance.get(`admin_catalog/${item.id}`)
                        .then((response) => {
                            setTableProducts((prev) => [...prev, response.data])
                        })
            })
        }
    }, [addProd])

    return (
        <TabBack
            margin={margin}
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            {ready
                ? Object.entries(inputs).map(([key, val]) => {
                    if (key === 'order_source_id') {
                        return (
                            <MySelect
                                key={key}
                                inputTitle={names[key]}
                                inputName={key}
                                val={allData !== undefined ? allData[key] : undefined}
                                options={val}
                                setData={uploadData}
                            />
                        )
                    }

                    if (key === 'products') {
                        return (
                            <React.Fragment key={key}>
                                <OrderSelect
                                    inputTitle={names[key]}
                                    options={options}
                                    val={isCreate ? undefined : selVal}
                                    newOptions={setOptions}
                                    setProducts={setProducts}
                                    isAdd={setAdd}
                                />
                                <StrippedTable tableData={tableProducts} del={setTableProducts}
                                               setProducts={setProducts}
                                               products={products} isAdd={setAdd} openProduct={openProduct}/>
                            </React.Fragment>
                        )
                    }
                    if (key === 'price') {
                        return <CustomOrderInput
                            key={key}
                            inputName={key}
                            isRequired={false}
                            val={allData !== undefined ? allData[key] : undefined}
                            type={val}
                            step={key === 'price' ? '0.01' : ''}
                            setData={() => {
                            }}
                            inputTitle={names[key]}
                            isOnlyView={true}
                        />
                    }
                    return (
                        <CustomOrderInput
                            key={key}
                            inputName={key}
                            isRequired={false}
                            val={allData !== undefined ? allData[key] : undefined}
                            type={val}
                            step={key === 'price' ? '0.01' : ''}
                            setData={uploadData}
                            inputTitle={names[key]}
                        />
                    )
                })
                : null}
        </TabBack>
    )
}
export default OrderTab
