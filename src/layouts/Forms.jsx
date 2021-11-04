import React, {useState} from 'react'
import styled from 'styled-components'
import CustomInput from '../componetns/UI/Inputs/CustomInput'
import SelectMultiply from '../componetns/UI/Selects/SelectMultiply'
import '../scss/animateChangeForm.scss'
import {SwitchTransition, CSSTransition} from 'react-transition-group'

const FormsLayout = styled.div`
width: 100%;
background-color: #f7f7f7;
display: flex;
flex-direction: column;
`

const styles = {
  active: {padding: '40px', backgroundColor: '#629862', width: '500px', height: '400px'},
  button: {padding: '40px', backgroundColor: '#826298', width: '500px', height: '400px'}
}

const Forms = () => {
  const [kek, setKek] = useState(true)
  const [mode, setMode] = useState('out-in')

  return (
    <FormsLayout>
      <SwitchTransition
        mode={mode}>
        <CSSTransition
          key={kek}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames={'change'}>
          <div>
            {
              kek ? <div style={styles.active}>ORDER</div> : <div style={styles.button}>DASDASDd</div>
            }
            <button onClick={() => {
              setKek(state => !state)
            }}>s
            </button>
          </div>
          {/*{howForm === 'order' ?*/}
          {/*  <OrderForm*/}
          {/*    isCreate={isCreate}*/}
          {/*    url={url}*/}
          {/*    id={id}*/}
          {/*    onClose={handleClose}*/}
          {/*    isPretty={isPretty}*/}
          {/*    setAllData={setAllData}*/}
          {/*    allData={allData}*/}
          {/*    switchForm={setHowForm}*/}
          {/*    setProductId={setProductId}*/}
          {/*    clientHistory={clientHistory}*/}
          {/*    setClientHistory={setClientHistory}*/}
          {/*    activeTab={activeTab}*/}
          {/*    tableProducts={tableProducts}*/}
          {/*    setTableProducts={setTableProducts}/> :*/}
          {/*  howForm === 'product' ?*/}
          {/*    <React.Fragment>*/}
          {/*      <button onClick={() => {*/}
          {/*        setHowForm('order')*/}
          {/*        setActiveTab('order')*/}
          {/*      }}>Назад*/}
          {/*      </button>*/}
          {/*      <ViewForm*/}
          {/*        id={productId}/>*/}
          {/*    </React.Fragment> :*/}
          {/*    howForm === 'client_history' ? <div>History</div> : null*/}
          {/*}*/}
        </CSSTransition>
      </SwitchTransition>
    </FormsLayout>
  )
}
export default Forms

// <FormsLayout>
//   <CustomInput
//     setData={() => {
//     }}
//     type={'string'}
//     inputTitle={'Text'}/>
//   <CustomInput
//     setData={() => {
//     }}
//     type={'int'}
//     inputTitle={'number'}/>
//   <CustomInput
//     setData={() => {
//     }}
//     type={'bool'}
//     inputTitle={'checkbox'}/>
//   <CustomInput
//     setData={() => {
//     }}
//     type={'textarea'}
//     inputTitle={'textarea'}/>
//   <CustomInput
//     setData={() => {
//     }}
//     type={'select'}
//     inputTitle={'select'}
//     val={[1, 2, 3, 4]}/>
//   <SelectMultiply
//     options={[
//       {value: 1, label: 'Odin'},
//       {value: 2, label: 'Dva'},
//       {value: 3, label: 'Tri'},
//       {value: 4, label: 'Chetire'}
//     ]}/>
// </FormsLayout>