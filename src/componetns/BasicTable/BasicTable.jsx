import React, {useState} from 'react'
import BasicTableBodyRow from './BasicTableBodyRow'
import {CustomTable, HeadRow} from '../Tables/StyledComponentsTable'

const thNames = {
  id: 'ID',
  name: 'Название',
  value: 'Значение'
}

const BasicTable = ({tableData, currentTable, dispatch, inputTypes, isPretty, openModal}) => {
  const [allActive, setAllActive] = useState(false)
  const namesMap = new Map(Object.entries(thNames))

  return (
    <CustomTable striped bordered hover size="lg">
      <thead>
      <HeadRow>
        <th><input type="checkbox" onClick={() => {
          setAllActive(!allActive)
        }}/></th>
        {tableData.length === 0 ? null :
          Object.keys(tableData[0]).map((item, index) => {
            if (isPretty) {
              if (index > 1) {
                return null
              }
              return <th key={index}>{namesMap.get(item)}</th>
            }
            return (
              <th key={index}>{item}</th>
            )
          })}
        <th>Смотреть</th>
        <th>Удалить</th>
      </HeadRow>
      </thead>
      <tbody>
      {tableData.map((item, index) => {
        return (
          <BasicTableBodyRow
            key={index}
            isActive={allActive}
            rowData={item}
            currentTable={currentTable}
            dispatch={dispatch}
            inputTypes={inputTypes}
            isPretty={isPretty}
            openModal={openModal}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default BasicTable