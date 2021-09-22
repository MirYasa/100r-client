import instance from '../../settings/defaultAxios'

export const  getContent = async (dispatch, type, url) => {
  try {
    const data = await instance.get(url)
    dispatch({type: type, payload: data.data})
  } catch (e) {
    console.log(e)
  }
}