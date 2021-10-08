import React, {useState} from 'react'
import {CustomTable, HeadRow} from '../StyledComponentsTable'
import OrderTableRow from './OrderTableRow'
import OrderTitles from './OrderTitles'



const OrderTable = ({tableData, currentTable, dispatch, inputTypes, url, isPretty, currentPage}) => {
  const [allActive, setAllActive] = useState(false)
  // console.log(tableData)

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
        <th>Смотреть</th>
        <th>Удалить</th>
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
            inputTypes={inputTypes}
            url={url}
            isPretty={isPretty}/>
        )
      })}
      </tbody>
    </CustomTable>
  )
}
export default OrderTable