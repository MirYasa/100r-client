import React from 'react'
import {Table} from 'react-bootstrap'

const StrippedTable = ({tableData}) => {
    return (
      <Table striped bordered hover size="lg  ">
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        {tableData.map((item, index) => {
          return(
            <tr key={index}>
              <td>{item.index}</td>
              <td>{item.name}</td>
              <td>{item.secondName}</td>
              <td>{item.userName}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    )
}
export default StrippedTable