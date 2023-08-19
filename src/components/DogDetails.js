/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/DogDetails.css";

const DogDetails = ({ dog }) => {
  return (
    <div className="dog-details">
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <p>
        <Link to="/dogs">Go Back</Link>
      </p>
    </div>
  );
};

export default DogDetails;
