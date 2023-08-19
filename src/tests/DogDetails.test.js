/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";
import DogDetails from "../components/DogDetails";

test("renders dog details", () => {
  const dog = {
    name: "Whiskey",
    age: 5,
    src: "whiskey.jpg",
    facts: ["Fact 1", "Fact 2"],
  };

  render(<DogDetails dog={dog} />);

  const dogName = screen.getByText(/Whiskey/i);
  const dogAge = screen.getByText(/Age: 5/i);
  const fact1 = screen.getByText(/Fact 1/i);
  const fact2 = screen.getByText(/Fact 2/i);

  expect(dogName).toBeInTheDocument();
  expect(dogAge).toBeInTheDocument();
  expect(fact1).toBeInTheDocument();
  expect(fact2).toBeInTheDocument();
});
