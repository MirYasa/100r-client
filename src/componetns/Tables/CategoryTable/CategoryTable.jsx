import React, {useState} from 'react'
import {CustomTable, HeadRow} from '../StyledComponentsTable'
import CategoryTableRow from './CategoryTableRow'
import CategoryTitles from './CategoryTitles'

const CategoryTable = ({tableData, currentPage}) => {
  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <HeadRow>
        <th><input type="checkbox" onClick={() => {
        }}/></th>
        {tableData.length === 0 ? null :
          Object.keys(tableData[0]).map((item, index) => {
            return (
              <CategoryTitles key={index} item={item} currentPage={currentPage}/>
            )
          })}
        <th>Смотреть</th>
        <th>Удалить</th>
      </HeadRow>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <CategoryTableRow
            key={index}
            rowData={item}
            inputTypes={{}}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default CategoryTable