import React from 'react'
import { useBookContext } from './bookContext'



const CheckedOut = ({ book }) => {
    const {checkOut, returnBook, name } = useBookContext()

  const returnChecker = (id) => {
    const boolean = checkOut.some((book) => book.id ===id)
    return boolean
console.log(name)
  }
    return (
        <>
        {checkOut.length > 0 ? checkOut.map((item) => {
            let thumbnail =
            item.imageLinks &&
            item.imageLinks.smallThumbnail;
            return (
                <>
               <div className="card"  >
                <img src={thumbnail} alt="not found" />
                <div className="bottom">
                  <h3 className="title">{item.title}</h3>
                  <h3>{name}</h3>
                  {returnChecker(book.id) ? ( <button onClick={() => returnBook(book.id)}>Return</button>)
                  : (<h3>nothing here</h3>)}
                </div>
              </div>
             
            </>
          );
        }):<h1>All Books Have Been Returned</h1>}
      </>
    );
  };

export default CheckedOut