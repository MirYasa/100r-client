import React from 'react'
import {Button} from "react-bootstrap";
import styled from "styled-components";

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

export default function PriceParser({}) {
    return (
        <PriceParserWrapper>

            <div style={{margin: '0 auto'}}>
                <Button>Обновить цены</Button>
                <Button>Обновить характеристики</Button>
            </div>
        </PriceParserWrapper>
    )
}