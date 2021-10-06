import React, {useEffect, useState} from 'react'
import FormButtons from './FormButtons'
import styled from 'styled-components'
import {Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import instance from '../../settings/defaultAxios'
import CustomInput from '../UI/Inputs/CustomInput'
import SelectMultiply from '../UI/Selects/SelectMultiply'
import MySelect from '../UI/Selects/MySelect'
import {AddCatalog, AddCategory, UpdateCategory} from '../../functions/APIRequest'
import {useForm} from 'react-hook-form'
import ValidInput from '../UI/Inputs/ValidInput'


const FormBack = styled(Form)`
width: 95%;
background-color: white;
border: 1px solid #eceef0;
margin: ${props => props.margin};
`
const names = {
  name: 'Название',
  parent_id: 'Родительская категория',
  props: 'Параметры'
}

const CategoryForm = ({isCreate, onClose, categoryId}) => {
  const [TypeData, setTypeData] = useState({})
  const [data, setData] = useState(isCreate ? {
    name: '',
    parent_id: null,
    props: []
  } : {})
  const [updatedData, setUpdatedData] = useState({})
  const dispatch = useDispatch()
  const {register, handleSubmit, watch, formState: {errors}} = useForm()

  // console.log(updatedData, data)
  useEffect(() => {
      instance.get('admin_categories/create')
        .then(data => {
          setTypeData(data.data)
          if (!isCreate) {
            instance.get(`admin_categories/${categoryId}`)
              .then(data => {
                setData(data.data)
                setUpdatedData({
                  name: data.data.name,
                  parent_id: data.data.parent_id !== null ? data.data.parent_id.id : data.data.parent_id,
                  props: data.data.props.length === 0 ? data.data.props : data.data.props.map(item => (item.id))
                })
              })
          }
        })
    },
    []
  )

  console.log(watch('name'))

  const updateData = (name, value) => {
    setData({
      ...data,
      [name]: value
    })
  }
  const close = () => {
    onClose(false)
  }
  const updateUpdatedData = (name, value) => {
    setUpdatedData({
      ...updatedData,
      [name]: value
    })
  }
  const updateAction = (e) => {
    e.preventDefault()
    close()
    console.log(updatedData)
    UpdateCategory(dispatch, categoryId, updatedData)
  }
  const createAction = (e) => {
    close()
    console.log(data)
    console.log(errors)
    AddCategory(dispatch, data)
  }
  const _onSubmit = (e) => {
    console.log(e)
    console.log(errors)
  }

  return (
    <FormBack onSubmit={handleSubmit(_onSubmit)}>
      {Object.entries(isCreate ? TypeData : (data === undefined ? {} : data)).map(([key, val]) => {
        if (key === 'name') {
          return (
            <CustomInput key={key} type={val} val={isCreate ? '' : val} inputTitle={names[key]} inputName={key}
                         setData={isCreate ? updateData : updateUpdatedData}
                         isCategory={true}/>
          )
        }
        if (key === 'parent_id') {
          return <MySelect key={key} inputTitle={names[key]} inputName={key} options={isCreate ? val : TypeData[key]}
                           val={val === null ? 0 : val.id} setData={isCreate ? updateData : updateUpdatedData}/>
        }
        if (key === 'props') {
          return <SelectMultiply key={key} inputTitle={names[key]} options={isCreate ? val : TypeData[key]}
                                 val={!isCreate ? val : []} inputName={key}
                                 setData={isCreate ? updateData : updateUpdatedData}/>
        }
      })}
      <FormButtons
        buttons={[
          {title: 'Отмена', type: 'primary', action: close},
          {title: 'Сброс', type: 'primary', action: null},
          {title: 'Подтвердить', type: 'success', action: isCreate ? createAction : updateAction}]}
      />
    </FormBack>
  )
}
export default CategoryForm