import {addContent, deleteContent, getContent, getDefaultContent, updateContent} from '../store/actions/contentAction'
import {addCatalog, getCatalog, updateCatalog} from '../store/actions/catalogAction'
import instance from '../settings/defaultAxios'

export const Delete = (url, message, dispatch, id, type, content) => {

  if (window.confirm(message))

    deleteContent(`${url}/${id}`)
      .then(() => {
        if (content === 'default'){
          getDefaultContent(dispatch, type, url)
        }
        if (content === 'content'){
          getContent(dispatch, type, url)
        }
        if (content === 'catalog'){
          getCatalog(dispatch, type, url)
        }
      })
      .catch(e => {
        console.log(e)
      })

}
export const createContent = (e, url, data, dispatch, type, isDef) => {
  e.preventDefault()
  addContent(url, data)
    .then(() => {
      if (isDef) {
        getDefaultContent(dispatch, type, url)
      } else {
        getContent(dispatch, type, url)
      }
    })
    .catch(e => {
      console.log(e)
    })
}
export const createCatalog = (e, url, data, dispatch, type) => {
  e.preventDefault()
  addCatalog(`${url}`, data)
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

export const AddCategory = async (dispatch, data) => {
  try {
    const createCategory = await instance.post('/admin_categories', data)
      .then(() => {
        getCatalog(dispatch, 'GET_CATEGORIES', '/admin_categories')
      })
  } catch (e) {
    console.log(e)
  }
}
export const UpdateCategory = async (dispatch, id, data) => {
  try {
    const updateCategory = await instance.put(`/admin_categories/${id}`, data)
      .then(() => {
        getCatalog(dispatch, 'GET_CATEGORIES', '/admin_categories')
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
export const update = (e, url, data, dispatch, type, id, isDef) => {
  e.preventDefault()
  updateContent(`${url}/${id}`, data)
    .then(() => {
      if (isDef) {
        getDefaultContent(dispatch, type, url)
      }
     getContent(dispatch, type, url)
    })
    .catch(e => {
      console.log(e)
    })
}