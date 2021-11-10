import React from 'react'
import {ClientHandlingTableContainer} from '../StyledComponentsTable'
import {Table} from 'react-bootstrap'

const ClientHandlingTable = ({tableData}) => {
    return (
      <ClientHandlingTableContainer >
        <Table striped bordered hover size="md">
          <thead>
          <tr>
            <th>Id заказа</th>
            <th>Цена</th>
            <th>Источник</th>
            <th>Статус</th>
            <th>Дата</th>
          </tr>
          </thead>
          <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.order_source?.name}</td>
                <td>{item.order_status?.name}</td>
                <td>{new Date(item.created_at).toLocaleString('ru-RU')}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </ClientHandlingTableContainer>
    )
}
export default ClientHandlingTable