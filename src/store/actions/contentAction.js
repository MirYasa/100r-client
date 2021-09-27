import instance from '../../settings/defaultAxios'

export const getContent = async (dispatch, type, url) => {
  try {
    const data = await instance.get(url)
    dispatch({type: type, payload: data.data})
  } catch (e) {
    console.log(e)
  }
}
export const addContent = async (url, data) => {
  try {
    const createData = await instance.post(url, data)

  } catch (e) {
    console.log(e)
  }
}

export const updateContent = async (url, data) => {
  try {
    const updateData = await instance.put(url, data)

  } catch (e) {
    console.log(e)
  }
}

export const deleteContent = async (url) => {
  try {
    const del = await instance.delete(url)
  } catch (e) {
    console.log(e)
  }
}