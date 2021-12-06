import React, {useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import {Backdrop, CustomPopup} from '../Tables/StyledComponentsTable'
import {CSSTransition} from 'react-transition-group'
import '../../scss/modalAnimate.scss'
import OrderViewForm from './OrderViewForm'

const OrderViewModal = ({show, handleClose, id}) => {

  return (
    <React.Fragment>
      {show ? <Backdrop height={window.innerHeight}  zIndex={1052}  onClick={() => {handleClose(false)}}/> : null}
      <CSSTransition
        in={show}
        timeout={300}
        classNames={'modal'}
        unmountOnExit>
        <CustomPopup zIndex={1052} width={'1200px'}>
          <Modal.Header closeButton>
            <Modal.Title>Просмотр заказа</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderViewForm
            id={id}/>
          </Modal.Body>
        </CustomPopup>
      </CSSTransition>
    </React.Fragment>
  )
}
export default OrderViewModal