// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData";

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  const [bigImage, setBigImage] = useState(imagesArr[0].img)
  const [smallImage, setSmallImage] = useState(0)
  
  const active = {
    border: "lightgreen solid 2px"
  }
  const inactive = {
    border: "0"
  }
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick = (imgUrl, key) => {
    setBigImage(imgUrl)
    // images[smallImage].props.className = 'thumb'
    setSmallImage(key)
    // images[smallImage].props.className = 'thumb selected'
  }
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT

  const images = imagesArr.map((element, index) => {
    return <img src={element.img} alt={element.city} key={index} className={index === smallImage ? 'thumb selected' : 'thumb'} onClick={() => handleClick(element.img, index)}/>
  })

  // const images = imagesArr.map((image, idx) => {
  //   return <img className={`thumb ${idx === smallImage ? "selected" : ""}`} src={image.img} alt={image.city} key={idx} onClick={() => handleClick(image.img, idx)}/>
  // })
  
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{/* RENDER THE IMAGES ARRAY  */}{images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt='bigImaage'/>
      </div>
    </div>
  );
}
