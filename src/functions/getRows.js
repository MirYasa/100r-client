import instance from '../settings/defaultAxios'

export const  getRows = async (url) => {
 const data = await instance.get(url)
  return data.data
}