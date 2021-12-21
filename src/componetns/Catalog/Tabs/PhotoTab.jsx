import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import defaultAxios from "../../../settings/defaultAxios";

const PhotoTabWrapper = styled.div`
  width: 95%;
  margin: 0 auto;

  h5 {
    margin-bottom: 20px;
  }

  h6 {
    margin: 5px 0 15px 0;
  }
`
const ImageList = styled.div`
  display: flex;
  min-height: 150px;
  gap: 1rem;
  overflow-x: scroll;
`
const ImageItem = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: space-between;

  img {
    width: 150px;
    height: 150px;
    object-fit: fill;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 20px;
    justify-content: start;
    align-items: center;
    background-color: rgba(123, 124, 128, 0.75);
    border-radius: 0 5px 5px 0;

    span {
      color: red;
      font-weight: bold;
      margin-bottom: 10px;
      cursor: pointer;

    }
  }
`
const ImageListHeader = styled.h5`
  margin-top: 30px !important;
`

export default function PhotoTab({setKek, isUpdate, data, setData}) {
    const imgSrc = 'http://62.109.0.18/'

    const updateImage = (e) => {
        setKek(e.target.files)
    }

    return (
        <PhotoTabWrapper>
            <h6>Добавить изображения:</h6>
            <input multiple placeholder={'Выберите картинку'} type="file" onChange={(e) => {
                updateImage(e)
            }}/>

            {isUpdate && (
               <>
                   <ImageListHeader>Изображения продукта</ImageListHeader>
                   <ImageList>
                       {data.map((item, index) => (
                           <ImageItem key={index}>
                               <img src={`${imgSrc}${item.src}`} alt="" name={'src'}/>
                              <div>
                                   <span onClick={() => {
                                       defaultAxios.delete(`product_files/${item.id}`)
                                       const d = [...data]
                                       setData(d.filter(i => i.id !== item.id))
                                   }}>X</span>
                                  <input type="radio" defaultChecked={item.is_main} value={item.id} name={'image'} onChange={(e) => {
                                      setData(data.map(item => (item.id === +e.target.value ? {...item, is_main: true} : {...item, is_main: false})))
                                  }}/>
                              </div>
                           </ImageItem>
                       ))}
                   </ImageList>
               </>
            )}
        </PhotoTabWrapper>
    )
}