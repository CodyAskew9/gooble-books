import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useBookContext } from "./bookContext";

const Model = ({ show, item, onClose }) => {
  const {checkOut, addToCheckOut} = useBookContext()
  

  // const checkOutBook = (evt) => {
  //   if (evt.key === "Enter") {
  //   }}
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    console.log(checkOut)
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
              {/* <input
                type="text"
                placeholder="Enter Your Name"
                value={checkOut}
                onChange={(e) => checkOut(e.target.value)}
                onKeyDown={checkOutBook}
              /> */}
              <button onClick={() => addToCheckOut(item.volumeInfo)}>Check Out</button>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Model;
