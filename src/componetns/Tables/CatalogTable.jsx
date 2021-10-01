import React from 'react'
import {CustomTable, HeadRow} from './StyledComponentsTable'
import CatalogTableRow from './CatalogTableRow'

const CatalogTable = ({tableData}) => {

  const thNames = {
    product_id: 'ID',
    category: 'Категория',
    name: 'Имя',
    active: 'Активность',
    manufacturer: 'Производитель'
  }

  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <HeadRow>
        <th><input type="checkbox" onClick={() => {
        }}/></th>
        {tableData.length === 0 ? null :
          Object.keys(tableData[0]).map((item, index) => {
            return (
              <th key={index}>{Object.entries(thNames).map(([key, value]) => {
                if (key === item)
                  return value
              })}</th>
            )
          })}
        <th>Смотреть</th>
        <th>Удалить</th>
      </HeadRow>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <CatalogTableRow
            key={index}
            rowData={item}
            inputTypes={{}}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default CatalogTable