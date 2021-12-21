import {addContent, deleteContent, getContent, getDefaultContent, updateContent,} from '../store/actions/contentAction'
import {getCatalog, updateCatalog} from '../store/actions/catalogAction'
import instance from '../settings/defaultAxios'
import defaultAxios from "../settings/defaultAxios";

export const Delete = (url, message, dispatch, id, type, content) => {
    if (window.confirm(message))
        deleteContent(`${url}/${id}`)
            .then(() => {
                if (content === 'default') {
                    getDefaultContent(dispatch, type, url)
                }
                if (content === 'content') {
                    getContent(dispatch, type, url)
                }
                if (content === 'catalog') {
                    getCatalog(dispatch, type, url)
                }
            })
            .catch((e) => {
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
        .catch((e) => {
            console.log(e)
        })
}
export const AddCatalog = async (dispatch, allData, imagesData) => {
    try {
        await instance.post('/admin_catalog', allData)
            .then((res) => {
                getCatalog(dispatch, 'GET_CATALOG', '/admin_catalog')
                return res
            })
            .then(res => {
                if (imagesData.length === 0) return

                for (let i = 0; i < imagesData.length; i++) {
                    const imageData = new FormData()

                    imageData.append('src', imagesData[i])
                    imageData.append('product_id', res.data.id)
                    imageData.append('is_main', 'false')
                    setTimeout(() => {
                        defaultAxios.post('product_files', imageData)
                    }, 50)
                }
            })
    } catch (e) {
        console.log(e)
    }
}

export const AddCategory = async (dispatch, data) => {
    try {
        await instance.post('/admin_categories', data)
            .then(() => {
                getCatalog(dispatch, 'GET_CATEGORIES', '/admin_categories')
            })
    } catch (e) {
        console.log(e)
    }
}
export const UpdateCategory = async (dispatch, id, data) => {
    try {
        await instance.put(`/admin_categories/${id}`, data)
            .then(() => {
                getCatalog(dispatch, 'GET_CATEGORIES', '/admin_categories')
            })
    } catch (e) {
        console.log(e)
    }
}

export const updateCat = (e, url, data, id, dispatch) => {
    updateCatalog(`${url}/${id}`, data).then(() => {
        getCatalog(dispatch, 'GET_CATALOG', `/admin_catalog?page=${0}&order=product_id&direction=asc`)
    })
}
export const createOrders = (e, url, data, dispatch) => {
    try {
        instance.post(`${url}`, data).then(() => {
            getCatalog(dispatch, 'GET_ORDERS', '/admin_orders')
        })
    } catch (e) {
        console.log(e)
    }
}
export const updateOrders = (e, url, data, id, dispatch) => {
    try {
        // console.log(data)
        instance.put(`${url}/${id}`, data).then(() => {
            getCatalog(dispatch, 'GET_ORDERS', '/admin_orders?page=0&order=id&direction=asc')
        })
    } catch (e) {
        console.log(e)
    }
}
export const update = (e, url, data, dispatch, type, id, isDef) => {
    e.preventDefault()
    updateContent(`${url}/${id}`, data)
        .then(() => {
            if (isDef) {
                getDefaultContent(dispatch, type, url)
            } else {
                getContent(dispatch, type, url)
            }
        })
        .catch((e) => {
            console.log(e)
        })
}
export const updateImages = (localImages, imagesData, id) => {

    localImages.map(item => {
        setTimeout(() => {
            instance.put(`/product_files/${item.id}`, item)
        }, 50)
    })

    if (imagesData.length === 0) return
    for (let i = 0; i < imagesData.length; i++) {
        const imageData = new FormData()

        imageData.append('src', imagesData[i])
        imageData.append('product_id', id)
        imageData.append('is_main', 'false')
        setTimeout(() => {
            defaultAxios.post('product_files', imageData)
        }, 50)
    }
}