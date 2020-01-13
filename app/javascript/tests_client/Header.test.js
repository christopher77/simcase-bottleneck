import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header/Header";

test("Header component", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
