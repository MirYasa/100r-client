import React, {useState} from 'react'
import {CustomTable, HeadRow} from '../../Tables/StyledComponentsTable'
import OrderTableRow from './OrderTableRow'
import OrderTitles from './OrderTitles'

const OrderTable = ({tableData, currentTable, dispatch, currentPage, open}) => {
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
            return <OrderTitles
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
          <OrderTableRow
            key={index}
            isActive={allActive}
            rowData={item}
            currentTable={currentTable}
            dispatch={dispatch}
            open={open}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default OrderTable