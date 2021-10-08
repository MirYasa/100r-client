import React from 'react'
import {Modal} from 'react-bootstrap'
import CategoryForm from '../../Forms/CategoryForm'
import {Popup} from '../StyledComponentsTable'

const CategoryTablePopup = ({show, handleClose, modalTitle, isCreate, data}) => {
  return (
    <Popup show={show} onHide={() => {
      handleClose(false)
    }}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CategoryForm isCreate={isCreate} onClose={handleClose} categoryId={data} />
      </Modal.Body>
    </Popup>
  )
}
export default CategoryTablePopup