import React from "react";
import { render } from "@testing-library/react";
import Home from "../views/home/Home";

test("Home view", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment).toMatchSnapshot();
});
