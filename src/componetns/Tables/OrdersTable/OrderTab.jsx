import React, {useEffect, useMemo, useState} from 'react'
import CustomInput from '../../UI/Inputs/CustomInput'
import FormButtons from '../../Forms/FormButtons'
import {createOrders, updateOrders} from '../../../functions/APIRequest'
import {useForm} from 'react-hook-form'
import MySelect from '../../UI/Selects/MySelect'
import instance from '../../../settings/defaultAxios'
import OrderSelect from '../../UI/Selects/OrderSelect'
import {TabBack} from '../../Forms/FormStyles'
import StrippedTable from '../StrippedTable'
import {useDispatch} from 'react-redux'
import CustomOrderInput from '../../UI/Inputs/CustomOrderInput'

const OrderTab = ({
                    margin,
                    isCreate,
                    url,
                    id,
                    onClose,
                    names,
                    inputs,
                    ready,
                    allData,
                    uploadData,
                    options,
                    setOptions,
                    selVal,
                    switchForm,
                    setProductId,
                    products,
                    setProducts,
                    setAllData
                  }) => {

  const [tableProducts, setTableProducts] = useState([])
  const [add, setAdd] = useState(true)
  const [addProd, setAddProd] = useState(false)
  const dispatch = useDispatch()
  //
  // console.log(tableProducts)
  // console.log(products)

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: {errors},
  // } = useForm()

  useEffect(() => {
    if (products === undefined || products.length === 0) {
      return null
    } else {
      const arr = [...products]
      const current = arr.pop()

      if (add) {
        instance.get(`admin_catalog/${current}`).then((data) => {
          if (tableProducts.length === 0 && isCreate) {
            setTableProducts([...tableProducts, data.data])
          } else {
          tableProducts.map(item => {
            if (item.product_id !== data.data.product_id) {
              setTableProducts([...tableProducts, data.data])
            }
          })
          }
        })
      }
    }
    uploadData('products', products)
  }, [products])

  useEffect(() => {
    if (!isCreate) {
      if (ready) {
        setAddProd(true)
      }
    }
  }, [ready])
  useEffect(() => {
    if (ready) {
      products.map(item => {
        if (item)
          instance.get(`admin_catalog/${item}`).then((data) => {
            setTableProducts((prev) => [...prev, data.data])
          })
      })
    }
  }, [addProd])

  const close = () => {
    onClose(false)
  }
  const updateAction = (e) => {
    close()
    updateOrders(e, url, allData, id, dispatch)
    // console.log(products, 'products')
  }
  const createAction = (e) => {
    close()
    createOrders(e, url, allData, dispatch)
  }
  const clear = () => {
    // console.log(input.current.value)
    // Object.keys(formData).map(key => {
    //   mut = {...mut, [key]: null}
    // })
    // setAllData(mut)
  }

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
                <StrippedTable tableData={tableProducts} del={setTableProducts} setProducts={setProducts}
                               products={products} isAdd={setAdd} switchForm={switchForm} setProductId={setProductId}/>
              </React.Fragment>
            )
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
      <FormButtons
        buttons={[
          {title: 'Отмена', type: 'primary', action: close},
          {title: 'Сброс', type: 'primary', action: null},
          {
            title: 'Подтвердить',
            type: 'success',
            action: isCreate ? createAction : updateAction,
          },
        ]}
      />
    </TabBack>
  )
}
export default OrderTab
