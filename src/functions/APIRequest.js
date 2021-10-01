import {addContent, deleteContent, getContent, updateContent} from '../store/actions/contentAction'
import {addCatalog, getCatalog, updateCatalog} from '../store/actions/catalogAction'

export const APIRequest = (url, message, dispatch, id, type) => {

  if (window.confirm(message))

    deleteContent(`${url}/${id}`)
      .then(() => {
        getContent(dispatch, type, url)
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

export const updateCat = (e, url, data, id) => {
  e.preventDefault()
  updateCatalog(`${url}/${id}`, data)
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