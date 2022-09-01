import Model from './Model'
import React, { useState } from "react";
import { useBookContext } from './bookContext';
import { useEffect } from 'react';


const Card = ({ book }) => {
  // console.log(book)
  const {checkOut } = useBookContext()
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  useEffect(()=> {
    localStorage.setItem('checkout', JSON.stringify(checkOut))

  },[checkOut])
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        return (
          <>
            <div className="card" key={book.id} onClick={() =>{setShow(true);setBookItem(item)}}>
              <img src={thumbnail} alt="not found" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
              </div>
            </div>
            <Model show={show} item={bookItem} onClose={() => setShow(false)}/>
           
          </>
        );
      })}
    </>
  );
};
export default Card;