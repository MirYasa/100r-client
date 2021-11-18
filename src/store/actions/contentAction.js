import instance from '../../settings/defaultAxios'

export const getDefaultContent = async (dispatch, type, url) => {
  try {
    const data = await instance.get(url)
    dispatch({type: type, payload: data.data})
  } catch (e) {
    console.log(e)
  }
}

export const getContent = async (dispatch, type, url) => {
  try {
    const data = await instance.get(url)
    dispatch({type: type, payload: data.data.items})
  } catch (e) {
    console.log(e)
  }
}
export const addContent = async (url, data) => {
  try {
    await instance.post(url, data)
  } catch (e) {
    console.log(e)
  }
}

export const updateContent = async (url, data) => {
  try {
    await instance.put(url, data)
  } catch (e) {
    console.log(e)
  }
}

export const deleteContent = async (url) => {
  try {
    await instance.delete(url)
  } catch (e) {
    console.log(e)
  }
}