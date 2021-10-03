import React, {useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import styled from 'styled-components'
import CatalogForm from '../../Forms/CatalogForm'
import {getInputs} from '../../../store/actions/inputDataAction'
import {useDispatch} from 'react-redux'

const Popup = styled(Modal)`
.modal-dialog {
max-width: 1000px;
}
`
const CatalogTablePopup = ({show, handleClose, id, modalTitle, isCreate, data}) => {
  return (
    <Popup show={show} onHide={() => {
      handleClose(false)
    }}>
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