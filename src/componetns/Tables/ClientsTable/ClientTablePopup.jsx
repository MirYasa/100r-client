import React from 'react'
import {Modal} from 'react-bootstrap'
import ClientsForm from '../../Forms/ClientsForm'
import {Backdrop, CustomPopup} from '../StyledComponentsTable'
import {CSSTransition} from 'react-transition-group'

const BasicTablePopup = ({show, handleClose, formData, isCreate, dispatch, url, formDataValue, modalTitle, id, isPretty}) => {

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
            <ClientsForm formData={formData} isCreate={isCreate} dispatch={dispatch} url={url} id={id}
                           formDataValue={formDataValue} onClose={handleClose} isPretty={isPretty}/>
          </Modal.Body>
        </CustomPopup>
      </CSSTransition>
    </React.Fragment>
  )
}
export default BasicTablePopup