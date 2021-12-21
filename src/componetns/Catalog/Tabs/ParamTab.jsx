import React, {useEffect} from 'react'
import CatalogInput from "../../UI/Inputs/CatalogInput";
import {ParamsBlock} from "../../FormStyles";

export default function ParamTab({params, isCreate, uploadParams, data}) {

    return (
        <ParamsBlock>
            <h5>Параметры</h5>
            {isCreate ?
                Object.entries(params === undefined ? {} : params).map(([key, val]) => {
                    if (typeof val === "object")
                        return (
                            <React.Fragment key={key}>
                                <span>{key}</span>
                                {Object.entries(val).map(([item, value]) => {
                                    return (
                                        <CatalogInput
                                            key={value.name + item}
                                            inputName={value.name}
                                            inputTitle={value.name}
                                            val={undefined}
                                            type={value.type}
                                            setData={uploadParams}/>
                                    )
                                })}
                            </React.Fragment>
                        )

                }) :
                Object.entries(params === undefined ? {} : params).map(([key, val]) => {
                    return (
                        <React.Fragment key={key}>
                            <span>{key}</span>
                            {
                                val.map((item, index) =>
                                    <CatalogInput
                                        key={item.name + index}
                                        inputName={item.name}
                                        inputTitle={item.name}
                                        val={data ? data[item.name] : ''}
                                        type={item.type}
                                        setData={uploadParams}/>)
                            }
                        </React.Fragment>
                    )
                })}
        </ParamsBlock>
    )
}