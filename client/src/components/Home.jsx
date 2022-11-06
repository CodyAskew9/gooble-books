import React, { useState } from "react";
import Card from "./card";
import axios from "axios"
import CheckedOut from "./CheckedOut";
import Kids from "./Kids";


const Home = () => {
  const [search, setSearch]= useState("");
  const [bookData, setBookData]= useState([]);
  const searchBook = (event) =>{
     axios.get("https://www.googleapis.com/books/v1/volumes?q=:"+search+":keyes&key=AIzaSyBMzZS3hTqxyJMIFq0cxpTCJ8kOp3Y4Qbw")
     .then(res=> setBookData(res.data.items))
     .catch(err=> console.log(err))

     event.preventDefault()
    }
  
  return (
    
    <>
    <div className="header">
      <div className="row1">
        <h1>"When in doubt, go to the library." <br/>
          -Hermione Granger</h1>
      </div>
      <div className="row2">
        <h1>Find Your Book</h1>
        <div className="search">
          <form onSubmit={searchBook}>
          <input type="text" placeholder="Enter Your Book" 
          value={search} onChange={e=>setSearch(e.target.value)} />
         <div className="button">
          <input type="submit" />
         </div>
          </form>
        </div>
        
      </div>
      
    </div>
      <div className="container">
       <Card book= {bookData}  />       
       < CheckedOut book= {bookData}  />
  
       </div>
    </>
  );
};

export default Home;
