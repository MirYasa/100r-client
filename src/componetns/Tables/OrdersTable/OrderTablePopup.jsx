import React from 'react'
import {Modal} from 'react-bootstrap'
import {Popup} from '../StyledComponentsTable'
import OrderForm from '../../Forms/OrderForm'

const OrderTablePopup = ({show, handleClose, formData, isCreate, dispatch, url, formDataValue, modalTitle, id, isPretty,}) => {
  return (
    <Popup
      show={show}
      onHide={() => {
        handleClose(false)
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <OrderForm
        formData={formData}
        isCreate={isCreate}
        dispatch={dispatch}
        url={url}
        id={id}
        formDataValue={formDataValue}
        onClose={handleClose}
        isPretty={isPretty}/>
      </Modal.Body>
    </Popup>
  )
}
export default OrderTablePopup
