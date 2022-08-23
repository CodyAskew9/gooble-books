import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, breands } from "@fortawesome/fontawesome-svg-core";
const Home = () => {
  return (
    <div className="header">
      <div className="row">
        <h1></h1>
      </div>
      <div className="row2">
        <h1>Find Your Book</h1>
        <div className="search">
          <input type="text" placeholder="Enter Your Book" />
          <button>submit
            <FontAwesomeIcon icon="fa-solid fa-book" />
          </button>
        </div>
        <img src="" alt="cover not found"></img>
      </div>
    </div>
  );
};

export default Home;
