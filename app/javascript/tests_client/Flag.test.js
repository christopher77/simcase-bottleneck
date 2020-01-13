import React from "react";
import { render } from "@testing-library/react";
import Flag from "../components/ui/Flag/Flag";

test("Flag component", () => {
  const { asFragment } = render(<Flag />);
  expect(asFragment()).toMatchSnapshot();
});
