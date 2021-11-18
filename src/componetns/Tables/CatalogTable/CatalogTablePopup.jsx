import React from 'react'
import {Modal} from 'react-bootstrap'
import CatalogForm from '../../Forms/CatalogForm'
import {Backdrop, CustomPopup} from '../StyledComponentsTable'
import {CSSTransition} from 'react-transition-group'

const CatalogTablePopup = ({show, handleClose, modalTitle, isCreate}) => {
  return (
    <React.Fragment>
      {show ? <Backdrop height={window.innerHeight}  zIndex={1051}  onClick={() => {handleClose(false)}}/> : null}
      <CSSTransition
        in={show}
        timeout={300}
        classNames={'modal'}
        unmountOnExit>
        <CustomPopup zIndex={1051} width={'1300px'}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CatalogForm isCreate={isCreate} onClose={handleClose}/>
          </Modal.Body>
        </CustomPopup>
      </CSSTransition>
    </React.Fragment>
  )
}
export default CatalogTablePopup