import React from "react";
import { render } from "@testing-library/react";
import StationBox from "../components/StationBox/StationBox";

test("StationBox component", () => {
  const { asFragment } = render(
    <StationBox
      expectedMachines={{}}
      numStation={{}}
      station={{}}
      machinesAvailable={{}}
      round={{}}
      feedback={false}
      flagDirection={{}}
    />
  );
  expect(asFragment).toMatchSnapshot();
});
