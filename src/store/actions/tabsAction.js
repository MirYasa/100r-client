import instance from '../../settings/defaultAxios'

export const  getTabs = async (dispatch, type) => {
  try {
    const data = await instance.get('tabs')
    dispatch({type: type, payload: data.data.Crud})
  } catch (e) {
    console.log(e)
  }
}
