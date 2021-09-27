import {addContent, deleteContent, getContent, updateContent} from '../store/actions/contentAction'

export const confirm = (url, message, dispatch, id, type) => {

  if (window.confirm(message))

    deleteContent(`${url}/${id}`)
      .then(() => {
        getContent(dispatch, type, url)
      })
      .catch(e => {
        console.log(e)
      })

}
export const createContent = (e ,url, data, dispatch, type) => {
  e.preventDefault()
  addContent(url, data)
    .then(() => {
      getContent(dispatch, type, url)
    })
    .catch(e => {
      console.log(e)
    })
}
export const update = (e, url, data, dispatch, type) => {
  e.preventDefault()
  updateContent(url, data)
    .then(() => {
      getContent(dispatch, type, url)
    })
    .catch(e => {
      console.log(e)
    })
}