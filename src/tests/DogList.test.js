/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";
import DogList from "../components/DogList";

test("renders list of dogs", () => {
  const dogs = [
    { id: "1", name: "Whiskey", src: "whiskey.jpg" },
    { id: "2", name: "Duke", src: "duke.jpg" },
  ];

  render(<DogList dogs={dogs} />);

  const whiskey = screen.getByAltText(/Whiskey/i);
  const duke = screen.getByAltText(/Duke/i);

  expect(whiskey).toBeInTheDocument();
  expect(duke).toBeInTheDocument();
});
