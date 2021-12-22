import React, {useState} from 'react'
import {Button, Modal} from "react-bootstrap";
import styled from "styled-components";
import {parseParams, parsePrices} from "../functions/APIRequest";

const PriceParserWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
    button {
      margin: 0 20px;
    }
`
const ModalContent = styled.div`
padding: 20px;
  margin: 20px auto;
`

export default function PriceParser({}) {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('Цены')

    const parsePrice = () => {
        parsePrices()
            .then( res => {
                setTitle('Цены')
                setShow(true)
                })
    }
    const parseParam = () => {
        parseParams()
            .then( res => {
                setTitle('Характеристики')
                setShow(true)
            })
    }

    return (
        <PriceParserWrapper>
            <Modal show={show} onHide={() => {setShow(!show)}}>
                <ModalContent>{title} успешно обновлены!</ModalContent>
            </Modal>
            <div style={{margin: '0 auto'}}>
                <Button onClick={parsePrice}>Обновить цены</Button>
                <Button onClick={parseParam}>Обновить характеристики</Button>
            </div>
        </PriceParserWrapper>
    )
}