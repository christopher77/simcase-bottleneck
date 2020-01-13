import React from "react";
import { render } from "@testing-library/react";
import DataTable from "../views/game/DataTable/DataTable";

test("DataTable view", () => {
  const { asFragment } = render(<DataTable stations={{}} />);
  expect(asFragment).toMatchSnapshot();
});
