import instance from '../../settings/defaultAxios'

export const getInputs = async (dispatch, type, url) => {
  const inputs = await instance.get(url)
  dispatch({type: type, payload: inputs.data})
}