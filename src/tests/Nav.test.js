/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";

test("renders navigation links", () => {
  const dogs = [
    { id: "1", name: "Whiskey" },
    { id: "2", name: "Duke" },
  ];

  render(<Nav dogs={dogs} />);

  const whiskeyLink = screen.getByText(/Whiskey/i);
  const dukeLink = screen.getByText(/Duke/i);

  expect(whiskeyLink).toBeInTheDocument();
  expect(dukeLink).toBeInTheDocument();
});
