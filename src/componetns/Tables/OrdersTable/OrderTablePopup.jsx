import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {Popup} from '../StyledComponentsTable'
import OrderForm from '../../Forms/OrderForm'
import CatalogForm from '../../Forms/CatalogForm'

const OrderTablePopup = ({show, handleClose, isCreate, dispatch, url, modalTitle, id, isPretty,}) => {
  const [allData, setAllData] = useState({})
  const [howForm, setHowForm] = useState('order')
  return (
    <Popup
      show={show}
      onHide={() => {
        handleClose(false)
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          howForm === 'order' ?
            <OrderForm
              isCreate={isCreate}
              dispatch={dispatch}
              url={url}
              id={id}
              onClose={handleClose}
              isPretty={isPretty}
              setAllData={setAllData}
              allData={allData}
              switchForm={setHowForm}/> :
            howForm === 'product' ? <React.Fragment>
                <button onClick={() => {
                  setHowForm('order')
                }}>sss
                </button>
                <CatalogForm isCreate={isCreate}
                             onClose={handleClose}/>
              </React.Fragment> :
              howForm === 'client_history' ? <div>History</div> : null
        }
      </Modal.Body>
    </Popup>
  )
}
export default OrderTablePopup
