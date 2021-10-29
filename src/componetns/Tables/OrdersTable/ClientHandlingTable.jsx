import React from 'react'
import {ClientHandlingTableContainer} from '../StyledComponentsTable'
import {Table} from 'react-bootstrap'

const ClientHandlingTable = ({tableData}) => {
    return (
      <ClientHandlingTableContainer >
        <Table striped bordered hover size="md">
          <thead>
          <tr>
            <th>Id Клиента</th>
            <th>Имя</th>
            <th>Источник</th>
            <th>Заказ</th>
            <th>Дата</th>
          </tr>
          </thead>
          <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.client_id}</td>
                <td>{item.short_name}</td>
                <td>{item.client_source}</td>
                <td>{item.order}</td>
                <td>{item.created_at}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </ClientHandlingTableContainer>
    )
}
export default ClientHandlingTable