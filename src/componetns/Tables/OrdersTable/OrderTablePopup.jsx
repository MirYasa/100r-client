import React, {useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import {Backdrop, CustomPopup} from '../StyledComponentsTable'
import OrderForm from '../../Forms/OrderForm'
import {CSSTransition} from 'react-transition-group'
import '../../../scss/modalAnimate.scss'

const OrderTablePopup = ({show, handleClose, isCreate, url, modalTitle, id, isPretty, openProduct, openOrderView}) => {
  const [allData, setAllData] = useState({})
  const [clientHistory, setClientHistory] = useState([])
  const [products, setProducts] = useState([])
  const [activeTab, setActiveTab] = useState('client')

  // useEffect(() => {console.log(products)}, [products])

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
            <OrderForm
              isCreate={isCreate}
              url={url}
              id={id}
              onClose={handleClose}
              isPretty={isPretty}
              setAllData={setAllData}
              allData={allData}
              clientHistory={clientHistory}
              setClientHistory={setClientHistory}
              activeTab={activeTab}
              products={products}
              setProducts={setProducts}
              openProduct={openProduct}
              openOrderView={openOrderView}/>
          </Modal.Body>
        </CustomPopup>
      </CSSTransition>
    </React.Fragment>
  )
}
export default OrderTablePopup