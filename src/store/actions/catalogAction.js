import instance from '../../settings/defaultAxios'

export const getCatalog = async (dispatch, type, url) => {
  try {
    const products = await instance.get(url)
    dispatch({type: type, payload: products.data.items})
  } catch (e) {
    console.log(e)
  }
}

export const addCatalog = async (url, data) => {
  try {
    await instance.post('/catalog/', data)
  } catch (e) {
    console.log(e)
  }
}

export const updateCatalog = async (url, data) => {
  try {
   await instance.put(url, data)
  } catch (e) {
    console.log(e)
  }
}



export const getProduct = async (dispatch, type, url, id) => {
  try {
    const product = await instance.get(`${url}/${id}`)
    dispatch({type: type, payload: product.data})
  } catch (e) {
    console.log(e)
  }
}