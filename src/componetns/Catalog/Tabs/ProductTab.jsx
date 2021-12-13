import React from 'react'
import {ParamsBlock} from "../../FormStyles";
import CatalogInput from "../../UI/Inputs/CatalogInput";
import {names, titles} from "../CatalogFormInputsName";

export default function ProductTab({prices, allData, isCreate, uploadPrices, titlesMap, uploadData, emptyInput}) {
    return (
        <>
            {
                isCreate ?
                    <>
                        <ParamsBlock>
                            <h5>Цены</h5>
                            {Object.entries(prices === undefined ? {} : prices).map(([key, val]) => {
                                return (
                                    <CatalogInput
                                        key={key}
                                        inputName={key}
                                        inputTitle={key}
                                        val={isCreate ? undefined : allData.prices[key]}
                                        type={val}
                                        setData={uploadPrices}/>
                                )
                            })}
                        </ParamsBlock>
                        {
                            Object.entries(names).map(([key, val]) => {
                                return (
                                    <CatalogInput
                                        key={key}
                                        inputName={key}
                                        val={isCreate ? val === 'select' ? allData[key] : undefined : allData[key]}
                                        type={val}
                                        inputTitle={titlesMap.get(key)}
                                        setData={uploadData}/>
                                )
                            })
                        }
                    </> :
                    <>
                        <ParamsBlock>
                            <h5>Цены</h5>
                            {Object.entries(prices === undefined ? {} : prices).map(([key, val]) => {
                                return (
                                    <CatalogInput
                                        key={key}
                                        inputName={key}
                                        inputTitle={key}
                                        val={emptyInput ? '' : allData.prices[key]}
                                        type={val}
                                        setData={uploadPrices}/>
                                )
                            })}
                        </ParamsBlock>
                        {Object.entries(names).map(([key, val]) => {
                            return (
                                <CatalogInput
                                    key={key}
                                    inputName={key}
                                    val={allData[key]}
                                    type={val}
                                    inputTitle={titles[key]}
                                    setData={uploadData}/>
                            )
                        })
                        }
                    </>
            }
        </>
    )
}