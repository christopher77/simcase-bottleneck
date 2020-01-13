import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../components/App";

afterEach(cleanup);

describe("<App/>", () => {
  it("App component snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
