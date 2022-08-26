import React, { useState } from "react";

const Card = ({ book }) => {
    // console.log(book)
    let [checkOut, setCheckOut]= useState("")
    const checkOutBook = (evt) =>{
      if(evt.key ==="Enter"){
        console.log(checkOut)
      }
    }
  return (
    <>
      {book.map((item) => {
        let thumbnail= item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return (
            <>
          <div className="card" key={book.id} >
            <img src={thumbnail} alt="not found" />
            <div className="bottom">
              <h3 className="title">{item.volumeInfo.title}</h3>
          <input type="text" placeholder="Enter Your Name" value={checkOut} onChange={e=> setCheckOut(e.target.value)} OnKeyDown={checkOutBook} />
          <button>Check Out</button>
            </div>
          </div>
          </>
        );
      })}
    </>
  );
};
export default Card;
