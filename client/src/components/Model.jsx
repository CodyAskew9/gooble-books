import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useBookContext } from "./bookContext";

const Model = ({ show, item, onClose }) => {
  const {checkOut, addToCheckOut, student, name} = useBookContext()
  const handleSubmit = (event) => { addToCheckOut(item.volumeInfo)
    
    event.preventDefault()
  }
  const handelInput = (e) => {student(e.target.value)

    e.preventDefault()
  

}
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    console.log(checkOut, name)
  return (
    <>
      <div className="overlay">
        <div className="overlayInner">
          <button className="close" onClick={onClose}>
         <FaRegWindowClose />l
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
                <form onSubmit={handleSubmit}>
              <input type="text" name="Enter Your Name" onSubmit={handelInput}  />
              <input type="submit" />
                </form>
                  
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Model;
