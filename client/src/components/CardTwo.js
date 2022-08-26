import React, { useState } from "react";

const CardTwo= ({ book }) => {
    // console.log(book)
    let [checkOut, setCheckOut]= useState("")
    const checkOutBook = (evt) =>{
      if(evt.key ==="Enter"){
        console.log(checkOutBook)
      }
    }
  return (
    <>
      {book.map((item) => {
        let thumbnail= item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return (
            <>
          <div className="cardTwo" key={book.id} >
            <img src={thumbnail} alt="not found" />
            <div className="bottom">
              <h3 className="title">{item.volumeInfo.title}</h3>
            </div>
          </div>
              <input type="text" placeholder="Enter Your Name" value={checkOut} onChange={e=> setCheckOut(e.target.value)} onKeyDown={checkOutBook} />
              <button>Check Out</button>
          </>
        );
      })}
    </>
  );
};

export default CardTwo