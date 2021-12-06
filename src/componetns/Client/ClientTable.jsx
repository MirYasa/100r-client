import React, {useState} from 'react'
import {CustomTable, HeadRow} from '../Tables/StyledComponentsTable'
import ClientTableRow from './ClientTableRow'
import ClientTitles from './ClientTitles'

const ClientTable = ({tableData, currentTable, dispatch, inputTypes, url, isPretty, currentPage, openModal}) => {
  const [allActive, setAllActive] = useState(false)

  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <HeadRow>
        <th><input type="checkbox" onClick={() => {
          setAllActive(!allActive)
        }}/></th>
        {tableData.length === 0 ? null :
          Object.keys(tableData[0]).map((item, index) => {
            return <ClientTitles
              currentPage={currentPage}
              key={index}
              item={item}
            />
          })}
        <th>Действия</th>
      </HeadRow>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <ClientTableRow
            key={index}
            isActive={allActive}
            rowData={item}
            currentTable={currentTable}
            dispatch={dispatch}
            inputTypes={inputTypes}
            url={url}
            isPretty={isPretty}
            openModal={openModal}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default ClientTable