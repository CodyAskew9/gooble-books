import React from "react";

const Card = ({ book }) => {
    console.log(book)
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
            </div>
          </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
