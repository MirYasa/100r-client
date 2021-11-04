import React, {useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import {Popup} from '../StyledComponentsTable'
import OrderForm from '../../Forms/OrderForm'
import ViewForm from '../../Catalog/ViewForm'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import '../../../scss/animateChangeForm.scss'

const OrderTablePopup = ({show, handleClose, isCreate, url, modalTitle, id, isPretty}) => {
  const [allData, setAllData] = useState({})
  const [howForm, setHowForm] = useState('order')
  const [productId, setProductId] = useState(0)
  const [clientHistory, setClientHistory] = useState([])
  const [tableProducts, setTableProducts] = useState([])
  const [activeTab, setActiveTab] = useState('client')

  // console.log(howForm)

  useEffect(() => {
    if (!show) {
      setAllData({})
      setClientHistory([])
      setTableProducts([])
      if (activeTab !== 'client') {
        setActiveTab('client')
      }
    }
  }, [show])

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
        <SwitchTransition
          mode={'out-in'}>
          <CSSTransition
            key={howForm === 'order'}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false)
            }}
            classNames={'change'}>
            <div>
              {howForm === 'order' ?
                <OrderForm
                  isCreate={isCreate}
                  url={url}
                  id={id}
                  onClose={handleClose}
                  isPretty={isPretty}
                  setAllData={setAllData}
                  allData={allData}
                  switchForm={setHowForm}
                  setProductId={setProductId}
                  clientHistory={clientHistory}
                  setClientHistory={setClientHistory}
                  activeTab={activeTab}
                  tableProducts={tableProducts}
                  setTableProducts={setTableProducts}/> :
                howForm === 'product' ?
                  <React.Fragment>
                    <button onClick={() => {
                      setHowForm('order')
                      setActiveTab('order')
                    }}>Назад
                    </button>
                    <ViewForm
                      id={productId}/>
                  </React.Fragment> :
                  howForm === 'client_history' ? <div>History</div> : null
              }
            </div>
          </CSSTransition>
        </SwitchTransition>
      </Modal.Body>
    </Popup>
  )
}
export default OrderTablePopup

//
// {howForm === 'order' ?
//    :
//
// }