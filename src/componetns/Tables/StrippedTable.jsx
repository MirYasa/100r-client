import React from 'react'
import {Button, Table} from 'react-bootstrap'
import {MdDelete, MdRemoveRedEye} from 'react-icons/md'
import {ActionsCell} from './StyledComponentsTable'

const StrippedTable = ({tableData, del, setProducts, products, isAdd, openProduct}) => {

  return (
    <Table striped bordered hover size="md" style={{marginTop: 25}}>
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
            <td><input type="number"/></td>
            <td><input type="number"/></td>
            <td>{item.manufacturer}</td>
            <td><input style={{width: '90px'}} type="number"/></td>
            <ActionsCell><Button variant={'primary'} onClick={() => {
              openProduct(item.product_id, true)
              isAdd(false)
            }}><MdRemoveRedEye/></Button>
              <Button variant={'danger'} onClick={() => {
                del(tableData.filter(el => el.product_id !== item.product_id))
                setProducts(products.filter(el => el !== item.product_id))
                isAdd(false)
              }}><MdDelete/></Button></ActionsCell>
          </tr>
        )
      })}
      </tbody>
    </Table>
  )
}
export default StrippedTable
