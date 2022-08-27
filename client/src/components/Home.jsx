import React, { useState } from "react";
import Card from "./card";
import axios from "axios"



const Home = () => {
  const [search, setSearch]= useState("");
  const [bookData, setBookData]= useState([]);
  const searchBook = (evt) =>{
    if(evt.key ==="Enter")
    {
     axios.get("https://www.googleapis.com/books/v1/volumes?q=:"+search+":keyes&key=AIzaSyBMzZS3hTqxyJMIFq0cxpTCJ8kOp3Y4Qbw")
     .then(res=> setBookData(res.data.items))
     .catch(err=> console.log(err))
    }
  }
  return (
    
    <>
    <div className="header">
      <div className="row1">
        <h1>"When in doubt go to the liberry" <br/>
          -Hermione Granger</h1>
      </div>
      <div className="row2">
        <h1>Find Your Book</h1>
        <div className="search">
          <input type="text" placeholder="Enter Your Book" 
          value={search} onChange={e=>setSearch(e.target.value)}
          onKeyDown={searchBook} />
          <button>submit
          </button>
        </div>
        {/* <CardTwo book= {bookData} /> */}
      </div>
      
    </div>
      <div className="container">
       { <Card book= {bookData}  />}
      </div>
    </>
  );
};

export default Home;
