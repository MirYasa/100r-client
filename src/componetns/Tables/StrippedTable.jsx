import React from 'react'
import {Button, Table} from 'react-bootstrap'

const StrippedTable = ({tableData, del, setProducts, products, isAdd}) => {

  return (
    <Table striped bordered hover size="md">
      <thead>
      <tr>
        <th>Артикул</th>
        <th>Продукт</th>
        <th>Цена</th>
        <th>Поставщик</th>
        <th>Редактировать</th>
        <th>Удалить</th>
      </tr>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.product_id}</td>
            <td>{item.short_name}</td>
            <td>Price</td>
            <td>{item.created_at}</td>
            <td><Button variant={'success'} onClick={() => {

            }}>Редактировать</Button></td>
            <td><Button variant={'danger'} onClick={() => {
              del(tableData.filter(el => el.product_id !== item.product_id))
              setProducts(products.filter(el => el !== item.product_id))
              isAdd(false)
            }}>Удалить</Button></td>
          </tr>
        )
      })}
      </tbody>
    </Table>
  )
}
export default StrippedTable
