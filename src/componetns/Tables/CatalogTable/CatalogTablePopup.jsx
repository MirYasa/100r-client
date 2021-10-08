import React from 'react'
import {Modal} from 'react-bootstrap'
import CatalogForm from '../../Forms/CatalogForm'
import {Popup} from '../StyledComponentsTable'

const CatalogTablePopup = ({show, handleClose, id, modalTitle, isCreate, data}) => {
  return (
    <Popup show={show} onHide={() => {handleClose(false)}}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CatalogForm isCreate={isCreate} url={' '} id={id} onClose={handleClose} data={data}/>
      </Modal.Body>
    </Popup>
  )
}
export default CatalogTablePopup