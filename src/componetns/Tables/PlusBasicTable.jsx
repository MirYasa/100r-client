import React from 'react'
import styled from 'styled-components'
import {Table} from 'react-bootstrap'
import * as IconFa from 'react-icons/fa'


const CustomTable = styled(Table)`
border-collapse: separate;
border: 1px solid #dee2e6;
  tr {
  border: 1px solid #dee2e6;
    td, th {
       padding: 12px;
       }
     }
`

const PlusBasicTable = ({tableData}) => {
  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <tr>
        <th></th>
        <th><input type="checkbox"/></th>
        <th>Name <IconFa.FaSortAmountDownAlt/></th>
        <th>Position <IconFa.FaSortAmountDownAlt/></th>
        <th>Office <IconFa.FaSortAmountDownAlt/></th>
        <th>Age <IconFa.FaSortAmountDownAlt/></th>
        <th>Start date <IconFa.FaSortAmountDownAlt/></th>
        <th>Salary <IconFa.FaSortAmountDownAlt/></th>
      </tr>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <tr key={index}>
            <td></td>
            <td><input type="checkbox"/></td>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.office}</td>
            <td>{item.age}</td>
            <td>{item.startDate}</td>
            <td>{item.salary}</td>
          </tr>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default PlusBasicTable