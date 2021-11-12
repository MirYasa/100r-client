import React from 'react'
import {Button, Table} from 'react-bootstrap'
import {MdDelete, MdRemoveRedEye} from 'react-icons/md'

const StrippedTable = ({tableData, del, setProducts, products, isAdd, switchForm, setProductId}) => {

  return (
    <Table striped bordered hover size="md">
      <thead>
      <tr>
        <th>Артикул</th>
        <th>Продукт</th>
        <th>Цена</th>
        <th>Цена поставщика</th>
        <th>Поставщик</th>
        <th>Количество</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        // console.log(item)
        return (
          <tr key={index}>
            <td>{item.product_id}</td>
            <td>{item.short_name}</td>
            <td>Price</td>
            <td>Price Manufacturer</td>
            <td>{item.manufacturer}</td>
            <td>Quantity</td>
            <td style={{display: 'flex', justifyContent: 'space-around'}}><Button variant={'primary'} onClick={() => {
              setProductId(item.product_id)
              switchForm('product')
              isAdd(false)
            }}><MdRemoveRedEye/></Button>
              <Button variant={'danger'} onClick={() => {
                del(tableData.filter(el => el.product_id !== item.product_id))
                setProducts(products.filter(el => el !== item.product_id))
                isAdd(false)
              }}><MdDelete/></Button></td>
          </tr>
        )
      })}
      </tbody>
    </Table>
  )
}
export default StrippedTable
