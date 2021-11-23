import instance from '../../settings/defaultAxios'

export const getOrderSatus = async (dispatch) => {
  try {
    await instance.get('/order_status')
      .then(response => {
        dispatch({type: 'GET_ORDER_STATUS', payload: response.data})
      })
      .catch(e => {
        console.log(e)
      })
  } catch (e) {
    console.log(e)
  }
}