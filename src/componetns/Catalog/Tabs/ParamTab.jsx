import React from 'react'
import CatalogInput from "../../UI/Inputs/CatalogInput";
import {ParamsBlock} from "../../FormStyles";

export default function ParamTab({params, isCreate, allData, uploadParams, emptyInput, data}) {
    return (
        <>
            {
                isCreate ? <ParamsBlock>
                    <h5>Параметры</h5>
                    {Object.entries(params === undefined ? {} : params).map(([key, val]) => {
                        return (
                            <CatalogInput
                                key={key}
                                inputName={key}
                                inputTitle={key}
                                val={isCreate ? undefined : allData.params[key]}
                                type={val}
                                setData={uploadParams}/>
                        )
                    })}
                </ParamsBlock> : <ParamsBlock>
                    <h5>Параметры</h5>
                    {Object.entries(params === undefined ? {} : params).map(([key, val]) => {
                        return (
                            <CatalogInput
                                key={key}
                                inputName={key}
                                inputTitle={key}
                                val={emptyInput ? '' : data.params[key]}
                                type={val}
                                setData={uploadParams}/>
                        )
                    })}
                </ParamsBlock>
            }
        </>
    )
}