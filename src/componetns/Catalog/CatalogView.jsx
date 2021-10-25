import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Modal } from "react-bootstrap"
import ViewForm from "./ViewForm"
import instance from "../../settings/defaultAxios"
import { updateCat } from "../../functions/APIRequest"
import { useDispatch } from "react-redux"
import { Back, Container, ModalContainer } from "./Styles"

const CatalogView = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const [inputType, setInputType] = useState({})
  const [params, setParams] = useState(data.params)
  const [prices, setPrices] = useState(data.prices)
  const dispatch = useDispatch()

  useEffect(() => {
    const product = instance.get(`/admin_catalog/${id}`).then((data) => {
      delete data.data.category
      delete data.data.created_at
      delete data.data.updated_at
      delete data.data.manufacturer
      setData(data.data)
      setParams(data.data.params)
      setPrices(data.data.prices)
    })
  }, [])
  useEffect(() => {
    const input = instance
      .get(
        `/admin_catalog/create?category=${
          data.category_id === undefined ? "" : data.category_id
        }`
      )
      .then((data) => {
        setInputType(data.data)
      })
  }, [data.category_id])

  const uploadData = (name, val) => {
    setData({
      ...data,
      [name]: val,
    })
  }
  const updateParams = (name, val) => {
    setParams({
      ...params,
      [name]: val,
    })
    setData({
      ...data,
      params: {
        ...params,
        [name]: val,
      },
    })
  }
  const updatePrices = (name, val) => {
    setPrices({
      ...prices,
      [name]: val,
    })
    setData({
      ...data,
      prices: {
        ...prices,
        [name]: val,
      },
    })
  }
  const updateAction = (e) => {
    console.log(data)
    updateCat(e, "/admin_catalog", data, id, dispatch)
  }
  return (
    <Container>
      <Back to={"/admin_catalog"} />
      <ModalContainer>
        <Modal.Header>
          <Modal.Title>Просмотр и измнение</Modal.Title>
          <Link to={"/admin_catalog"}>
            <button
              className={"btn-close"}
              type={"button"}
              aria-label={"Close"}
            />
          </Link>
        </Modal.Header>
        <Modal.Body>
          <ViewForm
            data={data}
            inputTypes={inputType}
            updateData={uploadData}
            updatePrice={updatePrices}
            updateParams={updateParams}
            updateAction={updateAction}
          />
        </Modal.Body>
      </ModalContainer>
    </Container>
  )
}
export default CatalogView
