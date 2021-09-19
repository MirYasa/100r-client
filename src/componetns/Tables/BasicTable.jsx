import React, {useState} from 'react'
import {Table} from 'react-bootstrap'
import styled from 'styled-components'
import BasicTableBodyRow from './BasicTableBodyRow'

const HeadRow = styled.tr`
background-color: #3f5367;
color: white;
th {
border: none;
}`
const CustomTable = styled(Table)`
input {
width: 16px;
height: 16px;
}
`
const BasicTable = ({tableData}) => {
  const [allActive, setAllActive] = useState(false)
  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <HeadRow>
        <th><input type="checkbox" onClick={() => {
          setAllActive(!allActive)
        }}/></th>
        <th>Invoice</th>
        <th>Invoice Date</th>
        <th>Order</th>
        <th>Bill to Name</th>
        <th>Status</th>
        <th>Amount</th>
        <th>Action</th>
      </HeadRow>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <BasicTableBodyRow
            key={index}
            isActive={allActive}
            rowData={item}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default BasicTable