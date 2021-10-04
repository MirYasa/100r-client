import {addContent, deleteContent, getContent, updateContent} from '../store/actions/contentAction'
import {addCatalog, getCatalog, updateCatalog} from '../store/actions/catalogAction'
import instance from '../settings/defaultAxios'

export const APIRequest = (url, message, dispatch, id, type) => {

  if (window.confirm(message))

    deleteContent(`${url}/${id}`)
      .then(() => {
        getContent(dispatch, type, url)
        getCatalog(dispatch, 'GET_CATALOG', '/admin_catalog')
      })
      .catch(e => {
        console.log(e)
      })

}
export const createContent = (e, url, data, dispatch, type) => {
  e.preventDefault()
  addContent(url, data)
    .then(() => {
      getContent(dispatch, type, url)
    })
    .catch(e => {
      console.log(e)
    })
}
export const createCatalog = (e, url, data, dispatch, type) => {
  e.preventDefault()
  addCatalog(`${url}`, data)
  // .then(() => {
  //   getCatalog(dispatch,type, url)
  // }).catch(e => {
  // console.log(e)
  // })

}
export const AddCatalog = async (dispatch, url, data) => {
  try {
    const createCatalog = await instance.post('/admin_catalog', data)
      .then(() => {
        getCatalog(dispatch, 'GET_CATALOG', '/admin_catalog')
      })
  } catch (e) {
    console.log(e)
  }
}


export const updateCat = (e, url, data, id, dispatch) => {
  updateCatalog(`${url}/${id}`, data)
    .then(() => {
      getCatalog(dispatch, 'GET_CATALOG', '/admin_catalog')
    })
}
export const update = (e, url, data, dispatch, type, id) => {
  e.preventDefault()
  updateContent(`${url}/${id}`, data)
    .then(() => {
      getContent(dispatch, type, url)
    })
    .catch(e => {
      console.log(e)
    })
}