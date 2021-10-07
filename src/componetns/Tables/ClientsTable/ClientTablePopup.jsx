import React from 'react'
import styled from 'styled-components'
import BasicForm from '../../Forms/BasicForm'
import {Modal} from 'react-bootstrap'
import ClientsForm from '../../Forms/ClientsForm'

const Popup = styled(Modal)`
.modal-dialog {
max-width: 1000px;
}
`

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