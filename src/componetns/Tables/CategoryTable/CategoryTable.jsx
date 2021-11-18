import React, {useState} from 'react'
import {CustomTable, HeadRow} from '../StyledComponentsTable'
import CategoryTableRow from './CategoryTableRow'
import CategoryTitles from './CategoryTitles'

const CategoryTable = ({tableData, currentPage, openModal}) => {
  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <HeadRow>
        <th><input type="checkbox" onClick={() => {
        }}/></th>
        {tableData.length === 0 ? null :
          Object.keys(tableData[0]).map((item, index) => {
            if (item === 'client_source_id') {
              return  null
            }
            return (
              <CategoryTitles key={index} item={item} currentPage={currentPage}/>
            )
          })}
        <th>Действия</th>
      </HeadRow>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <CategoryTableRow
            key={index}
            rowData={item}
            openModal={openModal}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default CategoryTable