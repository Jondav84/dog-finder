/** @format */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import dogsData from "../data/dogsData";

function App() {
  return (
    <Router>
      <Nav dogs={dogsData} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogsData} />} />
        <Route
          path="/dogs/:name"
          element={<RenderDogDetails dogs={dogsData} />}
        />
        <Route path="/" element={<Navigate to="/dogs" />} />
      </Routes>
    </Router>
  );
}

function RenderDogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return <DogDetails dog={dog} />;
}

export default App;
