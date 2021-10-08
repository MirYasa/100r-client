import React from 'react'
import {Modal} from 'react-bootstrap'
import ClientsForm from '../../Forms/ClientsForm'
import {Popup} from '../StyledComponentsTable'

const BasicTablePopup = ({show, handleClose, formData, isCreate, dispatch, url, formDataValue, modalTitle, id, isPretty}) => {
  return (
    <Popup show={show} onHide={() => {
      handleClose(false)
    }}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ClientsForm formData={formData} isCreate={isCreate} dispatch={dispatch} url={url} id={id}
                   formDataValue={formDataValue} onClose={handleClose} isPretty={isPretty}/>
      </Modal.Body>
    </Popup>
  )
}
export default BasicTablePopup