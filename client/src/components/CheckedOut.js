import React from 'react'
import { useBookContext } from './bookContext'




const CheckedOut = ({ book }) => {
    const {checkOut, returnBook} = useBookContext()

  const returnChecker = (id) => {
    const boolean = checkOut.some((book) => book.id ===id)
    return boolean
  }
    return (
        <>
        {checkOut.length > 0 ? checkOut.map((item) => {
            let thumbnail =
            item.imageLinks &&
            item.imageLinks.smallThumbnail;
            return (
                <>
               <div className="card" key={item.id} >
                <img src={thumbnail} alt="not found" />
                <div className="bottom">
                  <h3 className="title">{item.title}</h3>
                  {returnChecker(item.id) ? ( <button onClick={() => returnBook(item.id)}>Return</button>)
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