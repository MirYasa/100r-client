import React from 'react'
import {Modal} from 'react-bootstrap'
import ViewForm from './ViewForm'
import {Popup} from '../Tables/StyledComponentsTable'

const CatalogView = ({show, handleClose, id}) => {
  return (
    <Popup show={show} onHide={() => {
      handleClose(false)
    }}>
      <Modal.Header closeButton>
        <Modal.Title>Просмотр и измнение</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ViewForm id={id} close={handleClose}/>
      </Modal.Body>
    </Popup>
  )
}
export default CatalogView
