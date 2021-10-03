import React from 'react'
import styled from 'styled-components'
import BasicForm from '../../Forms/BasicForm'
import {Modal} from 'react-bootstrap'

const Popup = styled(Modal)`
.modal-dialog {
max-width: 1000px;
}
`

const BasicTablePopup = ({show, handleClose, formData, isCreate, dispatch, url, formDataValue, modalTitle, id}) => {
  return (
    <Popup show={show} onHide={() => {
      handleClose(false)
    }}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BasicForm formData={formData} isCreate={isCreate} dispatch={dispatch} url={url} id={id}
                   formDataValue={formDataValue} onClose={handleClose}/>
      </Modal.Body>
    </Popup>
  )
}
export default BasicTablePopup