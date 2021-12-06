import React, {useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import ProductTableInOrder from "../Order/Table/ProductTableInOrder";

const StrippedTable = ({tableData, del, setProducts, products, isAdd, openProduct}) => {
    const testData = []
    const [renderData, setRenderData] = useState([])

    useEffect(() => {
        if (tableData.length !== 0) {
            products.map(item => {
               return testData.push(tableData.find(i => i.product_id === item.id))
            })
        }
    }, [products, tableData])

    useEffect(() => {
        if (!testData.includes(undefined) && testData.length !== 0){
            setRenderData(testData)
        }
    }, [testData])


    return (
        <Table striped bordered hover size="md" style={{marginTop: 25}}>
            <thead>
            <tr>
                <th>Артикул</th>
                <th>Продукт</th>
                <th>Цена</th>
                <th>Цена поставщика</th>
                <th>Поставщик</th>
                <th>Количество</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {renderData ? renderData.map((item, index) => {
                return (
                    <ProductTableInOrder item={item} products={products} key={index} index={index} del={del}
                                         setProducts={setProducts} isAdd={isAdd} openProduct={openProduct}
                                         tableData={testData}/>
                )
            }) : null
            }
            </tbody>
        </Table>
    )
}
export default StrippedTable
