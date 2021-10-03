import React from 'react'
import StrippedTable from '../componetns/Tables/StrippedTable'
import styled from 'styled-components'
import BasicTable from '../componetns/Tables/BasicTable/BasicTable'
import PlusBasicTable from '../componetns/Tables/PlusBasicTable'

const TablesContainer = styled.div`
width: 95%;
margin: 50px auto 0 ;
`

const Tables = () => {
  return (
    <TablesContainer>
      <h3>Stripped table</h3>
      <StrippedTable
        tableData={[
          {
            index: 1,
            name: 'Name 1',
            secondName: 'SecondName 1',
            userName: 'Username 1'
          },
          {
            index: 2,
            name: 'Name 2',
            secondName: 'SecondName 2',
            userName: 'Username 2'
          },
          {
            index: 3,
            name: 'Name 3',
            secondName: 'SecondName 3',
            userName: 'Username 3'
          },
          {
            index: 4,
            name: 'Name 4',
            secondName: 'SecondName 4',
            userName: 'Username 4'
          }
        ]}/>
      <h3>Basic table</h3>
      <BasicTable
        tableData={[
          {
            invoice: '121000040',
            invoiceDate: 'May 23, 2014 11:47:56 PM',
            order: '121000210',
            billToName: 'John Blank L',
            status: 'Paid',
            amount: '$7.45'
          },
          {
            invoice: '121000040',
            invoiceDate: 'May 23, 2014 11:47:56 PM',
            order: '121000210',
            billToName: 'John Blank L',
            status: 'Paid',
            amount: '$7.45'
          },
          {
            invoice: '121000040',
            invoiceDate: 'May 23, 2014 11:47:56 PM',
            order: '121000210',
            billToName: 'John Blank L',
            status: 'Paid',
            amount: '$7.45'
          }
        ]}
        inputTypes={{}}
      />
        <h3>Plus basic table</h3>
      <PlusBasicTable
      tableData={[{
        name: 'Airi Satou',
        position: ' Accountant',
        office: 'Tokyo',
        age: '33',
        startDate: '2008/11/28',
        salary: '$162,700'
      },
        {
          name: 'Airi Satou',
          position: ' Accountant',
          office: 'Tokyo',
          age: '33',
          startDate: '2008/11/28',
          salary: '$162,700'
        },
        {
          name: 'Airi Satou',
          position: ' Accountant',
          office: 'Tokyo',
          age: '33',
          startDate: '2008/11/28',
          salary: '$162,700'
        }]}/>
    </TablesContainer>
  )
}
export default Tables