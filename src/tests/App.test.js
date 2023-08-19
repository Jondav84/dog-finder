/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

test("navigates to correct dog details page", () => {
  render(
    <MemoryRouter initialEntries={["/dogs/whiskey"]}>
      <App />
    </MemoryRouter>
  );

  // Assertions for DogDetails component
  const dogName = screen.getByText(/Whiskey/i);
  const dogAge = screen.getByText(/Age: 5/i);
  const fact1 = screen.getByText(/Whiskey loves eating popcorn./i);
  const fact2 = screen.getByText(/Whiskey is a terrible guard dog./i);
  const fact3 = screen.getByText(/Whiskey wants to cuddle with you!/i);
  const backButton = screen.getByText(/Go Back/i);

  expect(dogName).toBeInTheDocument();
  expect(dogAge).toBeInTheDocument();
  expect(fact1).toBeInTheDocument();
  expect(fact2).toBeInTheDocument();
  expect(fact3).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();

  // Assertions for DogList component
  const whiskeyImage = screen.getByAltText(/Whiskey/i);
  const dukeImage = screen.getByAltText(/Duke/i);

  expect(whiskeyImage).toBeInTheDocument();
  expect(dukeImage).toBeInTheDocument();

  // Assertions for Nav component
  const homeLink = screen.getByText(/Home/i);
  const whiskeyNavLink = screen.getByText(/Whiskey/i);
  const dukeNavLink = screen.getByText(/Duke/i);

  expect(homeLink).toBeInTheDocument();
  expect(whiskeyNavLink).toBeInTheDocument();
  expect(dukeNavLink).toBeInTheDocument();
});
