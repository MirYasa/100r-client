import instance from '../../settings/defaultAxios'

export const getCatalog = async (dispatch, type, url) => {
  try {
    const data = await instance.get(url)
    dispatch({type: type, payload: data.data.items})
  } catch (e) {
    console.log(e)
  }
}

export const addCatalog = async (url, data) => {
  try {
    const createCatalog = await instance.post('/catalog/', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }

    })
  } catch (e) {
    console.log(e)
  }
}

export const updateCatalog = async (url, data) => {
  try {
    const updateCatalog = await instance.put(url, data)

  } catch (e) {
    console.log(e)
  }
}



export const getProduct = async (dispatch, type, url, id) => {
  try {
    const data = await instance.get(`${url}/${id}`)
    dispatch({type: type, payload: data.data})
  } catch (e) {
    console.log(e)
  }
}