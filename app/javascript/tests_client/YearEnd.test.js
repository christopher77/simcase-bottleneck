import React from "react";
import { render } from "@testing-library/react";
import YearEnd from "../views/news/YearEnd/YearEnd";

test("YearEnd view", () => {
  const { asFragment } = render(<YearEnd />);
  expect(asFragment).toMatchSnapshot();
});
