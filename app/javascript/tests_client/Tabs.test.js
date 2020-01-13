import React from "react";
import { render } from "@testing-library/react";
import Tabs from "../views/pre-game/Tabs/Tabs";

test("Tabs view", () => {
  const { asFragment } = render(<Tabs />);
  expect(asFragment).toMatchSnapshot();
});
