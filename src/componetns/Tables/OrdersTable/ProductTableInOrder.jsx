import {ActionsCell} from "../StyledComponentsTable";
import {Button} from "react-bootstrap";
import {MdDelete, MdRemoveRedEye} from "react-icons/md";
import React, {useEffect, useState} from "react";


export default function ProductTableInOrder({item, products, index, openProduct, isAdd, del, setProducts, tableData}) {
    const [factPrice, setFactPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)

    if (products[index] !== undefined)
    return (
        <tr>
            <td>{item.product_id}</td>
            <td>{item.short_name}</td>
            <td>
                <input type="number"
                       defaultValue={products[index].fact_price === null ? 0 : products[index].fact_price}
                       onInput={(e) => {
                           setFactPrice(e.target.value)
                           products.map((product, indx) => {
                               const newArr = [...products]
                               if (product.id === item.product_id) {
                                   newArr.splice(indx, 1, {
                                       id: item.product_id,
                                       fact_price: e.target.value,
                                       quantity: product.quantity === null ? quantity : product.quantity
                                   })
                                   setProducts(newArr)
                               }
                           })
                       }}
                />
            </td>
            <td>Manufacturer price</td>
            <td>{item.manufacturer}</td>
            <td><input style={{width: '90px'}} type="number" defaultValue={products[index].quantity}
                       onInput={(e) => {
                           setQuantity(e.target.value)
                           products.map((product, indx) => {
                               const newArr = [...products]
                               if (product.id === item.product_id) {
                                   newArr.splice(indx, 1, {
                                       id: item.product_id,
                                       fact_price: product.fact_price === null ? factPrice : product.fact_price,
                                       quantity: e.target.value
                                   })
                                   setProducts(newArr)
                               }
                           })
                       }}/></td>
            <ActionsCell><Button variant={'primary'} onClick={() => {
                openProduct(item.product_id, true)
                isAdd(false)
            }}><MdRemoveRedEye/></Button>
                <Button variant={'danger'} onClick={() => {
                    del(tableData.filter(el => el.product_id !== item.product_id))
                    setProducts(products.filter(el => el.id !== item.product_id))
                    isAdd(false)
                }}><MdDelete/></Button></ActionsCell>
        </tr>
    )
    return null
}