import React, {useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import styled from 'styled-components'
import CatalogForm from '../../Forms/CatalogForm'
import {getInputs} from '../../../store/actions/inputDataAction'
import {useDispatch} from 'react-redux'
import CategoryForm from '../../Forms/CategoryForm'

const Popup = styled(Modal)`
.modal-dialog {
max-width: 1000px;
}
`
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