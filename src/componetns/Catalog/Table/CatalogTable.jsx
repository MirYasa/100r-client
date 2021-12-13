import React, {useState} from 'react'
import {CustomTable, HeadRow} from '../../Tables/StyledComponentsTable'
import CatalogTableRow from './CatalogTableRow'
import Titles from '../Titles'

const CatalogTable = ({tableData, currentPage, openModal}) => {
  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <HeadRow>
        <th><input type="checkbox" onClick={() => {
        }}/></th>
        {tableData.length === 0 ? null :
          Object.keys(tableData[0]).map((item, index) => {
            return (
              <Titles key={index} item={item} currentPage={currentPage}/>
            )
          })}
        <th>Действия</th>
      </HeadRow>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <CatalogTableRow
            key={index}
            rowData={item}
            openModal={openModal}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default CatalogTable