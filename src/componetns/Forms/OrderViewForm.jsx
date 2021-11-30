import React, {useEffect, useState} from 'react'
import instance from '../../settings/defaultAxios'
import CustomInput from '../UI/Inputs/CustomInput'

const OrderViewForm = ({id}) => {
  const [data, setData] = useState({})


  useEffect(() => {
    instance.get(`admin_orders/${id}`)
      .then(response => {
        setData(response.data)
        // console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

    return (
      <div>
        {Object.entries(data).map(([key, val]) => {
          if (key === 'order_status') {
            console.log(val)
           Object.entries(val).map(([valKey, valVal]) => {
             return <input type="text" defaultValue={valVal}/>
             console.log(valKey, valVal)
           })
          } else {
            return <input type="text" key={key} defaultValue={val}/>
          }
        })}
      </div>
    )
}
export default OrderViewForm