import React, {useEffect} from 'react'
import CatalogInput from "../../UI/Inputs/CatalogInput";
import {ParamsBlock} from "../../FormStyles";

export default function ParamTab({params, isCreate, allData, uploadParams, emptyInput, data}) {
   useEffect(() => {
       console.log(params)
   }, [params])

    return (
        <>
            {
                isCreate ? <ParamsBlock>
                    <h5>Параметры</h5>
                    {Object.entries(params === undefined ? {} : params).map(([key, val]) => {
                        console.log(key)
                        if (typeof val === "object")
                        return(
                            <React.Fragment key={key}>
                                <span>{key}</span>
                                {Object.entries(val).map(([item, value]) => {
                                    // console.log(item, value)
                                    return (
                                        <CatalogInput
                                            key={value.name + item}
                                            inputName={value.name}
                                            inputTitle={value.name}
                                            val={undefined}
                                            type={value.type}
                                            setData={uploadParams}/>
                                    )
                                }) }
                            </React.Fragment>

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