import React from 'react'
import MySelect from '../../../UI/Selects/MySelect'
import FormButtons from '../../../Forms/FormButtons'
import {TabBack} from '../../../Forms/FormStyles'
import {createOrders, updateOrders} from '../../../../functions/APIRequest'
import {useDispatch, useSelector} from 'react-redux'

const StatusTab = ({url, id, onClose, allData, margin, isCreate, uploadData}) => {
  const dispatch = useDispatch()
  const {status} = useSelector(state => state.order)

  const close = () => {
    onClose(false)
  }
  const updateAction = (e) => {
    close()
    updateOrders(e, url, allData, id, dispatch)
  }
  const createAction = (e) => {
    // close()
    createOrders(e, url, allData, dispatch)
    // console.log(allData)
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
      <MySelect
        options={status}
        inputTitle={'Статус заказа'}
        inputName={'order_status'}
        setData={uploadData}
        val={status[0]}
      />
      <FormButtons
        buttons={[
          {title: 'Отмена', type: 'primary', action: close},
          {title: 'Сброс', type: 'primary', action: null},
          {title: 'Подтвердить', type: 'success', action: isCreate ? createAction : updateAction,}
        ]}
      />
    </TabBack>
  )
}
export default StatusTab