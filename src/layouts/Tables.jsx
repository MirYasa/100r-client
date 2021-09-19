import React from 'react'
import StrippedTable from '../componetns/Tables/StrippedTable'
import styled from 'styled-components'

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
          { index: 1,
            name: 'Name 1',
            secondName: 'SecondName 1',
            userName: 'Username 1'},
          { index: 2,
            name: 'Name 2',
            secondName: 'SecondName 2',
            userName: 'Username 2'},
          { index: 3,
            name: 'Name 3',
            secondName: 'SecondName 3',
            userName: 'Username 3'},
          { index: 4,
            name: 'Name 4',
            secondName: 'SecondName 4',
            userName: 'Username 4'}
        ]}/>
      <h3>Basic table</h3>
    </TablesContainer>
  )
}
export default Tables