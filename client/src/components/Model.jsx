import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
const Model = ({ show, item, onClose }) => {
  let [checkOut, setCheckOut] = useState("");
  const checkOutBook = (evt) => {
    if (evt.key === "Enter") {
      console.log(checkOut);
    }}
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlayInner">
          <button className="close" onClick={onClose}>
         <FaRegWindowClose />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.authors}
                <span>{item.volumeInfo.authors}</span>
              </h4>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                onKeyDown={checkOutBook}
              />
              <button onClick={checkOutBook}>Check Out</button>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Model;
