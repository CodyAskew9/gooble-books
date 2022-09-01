import React, { useEffect } from 'react'
import { useBookContext } from './bookContext'



const CheckedOut = ({ book }) => {
    const {checkOut, returnBook, name } = useBookContext()
   
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
                  <h4 className='name'>{name.fullName}</h4>
                  <button onClick={() => returnBook(item.id)}>Return</button>
                </div>
              </div>
             
            </>
          );
        }):<h1>All Books Have Been Returned</h1>}
      </>
    );
  };

export default CheckedOut