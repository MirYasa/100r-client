import React from 'react'
import {Modal} from 'react-bootstrap'
import CategoryForm from './CategoryForm'
import {Backdrop, CustomPopup} from '../Tables/StyledComponentsTable'
import {CSSTransition} from 'react-transition-group'

const CategoryTablePopup = ({show, handleClose, modalTitle, isCreate, data}) => {
  return (
    <React.Fragment>
      {show ? <Backdrop height={window.innerHeight}  zIndex={1051}  onClick={() => {handleClose(false)}}/> : null}
      <CSSTransition
        in={show}
        timeout={300}
        classNames={'modal'}
        unmountOnExit>
        <CustomPopup zIndex={1051} width={'1300px'}>
          <Modal.Header>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CategoryForm isCreate={isCreate} onClose={handleClose} categoryId={data} />
          </Modal.Body>
        </CustomPopup>
      </CSSTransition>
    </React.Fragment>
  )
}
export default CategoryTablePopup