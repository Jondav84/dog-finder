/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/DogList.css";

const DogList = ({ dogs }) => {
  return (
    <div className="dog-list">
      <h1>Dog List</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} alt={dog.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
