import React from "react";
import { render } from "@testing-library/react";
import Modal from "../components/ui/Modal";

beforeAll(() => {
  let modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.append(modalRoot);
});

afterAll(() => {
  const elem = document.getElementById("modal-root");
  elem.parentNode.removeChild(elem);
});

describe("<Modal/>", () => {
  it("Modal component snapshot", () => {
    const { baseElement } = render(<Modal />);
    expect(baseElement).toMatchSnapshot();
  });
});
