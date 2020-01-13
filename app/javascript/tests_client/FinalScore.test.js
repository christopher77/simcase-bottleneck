import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FinalScore from "../views/game/FinalScore/FinalScore";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {
    totalScore: 10,
    success: 10,
    successRate: 10
  },
  feedback: {
    feeback: false
  }
};

const store = mockStore(initialState);

function renderWithProvider(children) {
  return render(<Provider store={store} children={children} />);
}

describe("<FinalScore/>", () => {
  it("FinalScore component snapshot", () => {
    const { asFragment } = renderWithProvider(<FinalScore />);
    expect(asFragment).toMatchSnapshot();
  });

  it("submits", () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 1 }));
    const { getByLabelText, getByText, debug } = renderWithProvider(
      <FinalScore />
    );
    const nameInput = getByLabelText("Enter your name:");
    fireEvent.change(nameInput, { target: { value: "yeee" } });
    const submitButton = getByText("save my score");
    fireEvent.click(submitButton);
    debug();
  });
});
