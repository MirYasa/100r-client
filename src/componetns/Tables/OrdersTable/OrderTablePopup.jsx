import React, {useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import {Backdrop, CustomPopup, Popup} from '../StyledComponentsTable'
import OrderForm from '../../Forms/OrderForm'
import ViewForm from '../../Catalog/ViewForm'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import '../../../scss/animateChangeForm.scss'
import '../../../scss/modalAnimate.scss'


const OrderTablePopup = ({show, handleClose, isCreate, url, modalTitle, id, isPretty}) => {
  const [allData, setAllData] = useState({})
  const [howForm, setHowForm] = useState('order')
  const [productId, setProductId] = useState(0)
  const [clientHistory, setClientHistory] = useState([])
  const [products, setProducts] = useState([])
  const [activeTab, setActiveTab] = useState('client')

  // console.log(allData)

  useEffect(() => {
    if (!show) {
      setAllData({})
      setProducts([])
      setClientHistory([])
      if (activeTab !== 'client') {
        setActiveTab('client')
      }
    }
  }, [show])

  useEffect(() => {
    if (allData.products !== undefined) {
      if (products.length < allData.products.length){
        setProducts(allData.products)
      }
    }
  }, [allData])

  return (
    <React.Fragment>
      {show ? <Backdrop height={window.innerHeight}  onClick={() => {handleClose(false)}}/> : null}
      <CSSTransition
        in={show}
        timeout={300}
        classNames={'modal'}
        unmountOnExit>
        <CustomPopup>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
              products={products}
              setProducts={setProducts}/>
          </Modal.Body>
        </CustomPopup>
      </CSSTransition>
    </React.Fragment>
  )
}
export default OrderTablePopup

// {/*<SwitchTransition*/}
// {/*  mode={'out-in'}>*/}
// {/*  <CSSTransition*/}
// {/*    key={howForm === 'order'}*/}
// {/*    addEndListener={(node, done) => {*/}
// {/*      node.addEventListener('transitionend', done, false)*/}
// {/*    }}*/}
// {/*    classNames={'change'}>*/}
// {/*    <div>*/}
// {/*      {howForm === 'order' ?*/}
// {/*         :*/}
// {/*        howForm === 'product' ?*/}
// {/*          <React.Fragment>*/}
// {/*            <button onClick={() => {*/}
// {/*              setHowForm('order')*/}
// {/*              setActiveTab('order')*/}
// {/*            }}>Назад*/}
// {/*            </button>*/}
// {/*            <ViewForm*/}
// {/*              id={productId}*/}
// {/*              close={() => {*/}
// {/*              }}/>*/}
// {/*          </React.Fragment> :*/}
// {/*          howForm === 'client_history' ? <div>History</div> : null*/}
// {/*      }*/}
// {/*    </div>*/}
// {/*  </CSSTransition>*/}
// {/*</SwitchTransition>*/}