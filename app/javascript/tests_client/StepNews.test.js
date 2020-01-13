import React from "react";
import { render } from "@testing-library/react";
import StepNews from "../views/news/StepNews";

test("StepNews component", () => {
  const { asFragment } = render(<StepNews />);
  expect(asFragment).toMatchSnapshot();
});
