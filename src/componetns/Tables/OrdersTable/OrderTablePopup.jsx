import React from "react"
import { Modal, Tabs, Tab } from "react-bootstrap"
import OrderForm from "../../Forms/OrdersForm"
import { Popup } from "../StyledComponentsTable"

const BasicTablePopup = ({
  show,
  handleClose,
  formData,
  isCreate,
  dispatch,
  url,
  formDataValue,
  modalTitle,
  id,
  isPretty,
}) => {
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
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="client" title="Клиент">
            <div>Клиент</div>
          </Tab>
          <Tab eventKey="order" title="Заказ">
            <OrderForm
              formData={formData}
              isCreate={isCreate}
              dispatch={dispatch}
              url={url}
              id={id}
              formDataValue={formDataValue}
              onClose={handleClose}
              isPretty={isPretty}
            />
          </Tab>
          <Tab eventKey="tab3" title="Вкладка 3"></Tab>
          <Tab eventKey="tab4" title="Вкладка 4"></Tab>
        </Tabs>
      </Modal.Body>
    </Popup>
  )
}
export default BasicTablePopup
