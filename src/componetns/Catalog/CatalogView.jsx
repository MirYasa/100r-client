import React from 'react'
import {Modal} from 'react-bootstrap'
import ViewForm from './ViewForm'
import {Backdrop, CustomPopup} from '../Tables/StyledComponentsTable'
import {CSSTransition} from 'react-transition-group'
import '../../scss/modalAnimate.scss'

const CatalogView = ({show, handleClose, id, isShow, title}) => {
  return (
    <React.Fragment>
      {show ? <Backdrop height={window.innerHeight} zIndex={1051} onClick={() => {handleClose(false)}}/> : null}
      <CSSTransition
        in={show}
        timeout={300}
        classNames={'modal'}
        unmountOnExit>
        <CustomPopup zIndex={1052} width={'1280px'}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ViewForm
            isShow={isShow}
            id={id}
            close={handleClose}/>
          </Modal.Body>
        </CustomPopup>
      </CSSTransition>
    </React.Fragment>
  )
}
export default CatalogView
