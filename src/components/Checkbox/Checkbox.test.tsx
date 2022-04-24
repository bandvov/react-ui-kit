import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";
import { COLORS } from "../../CONSTANTS";

describe("Checkbox", () => {
  test("Default checkbox", () => {
    render(<Checkbox onChange={() => {}} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    expect(checkboxElement).toBeInTheDocument();
  });

  test("Checkbox with label", () => {
    const label = "some label";
    render(<Checkbox label={label} onChange={() => {}} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    expect(checkboxElement).toHaveTextContent(label);
  });

  test("Checkbox click handler", () => {
    const handler = jest.fn();
    render(<Checkbox label={"checkbox"} onChange={handler} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    fireEvent.click(checkboxElement);
    expect(handler).toBeCalledTimes(1);
  });
  test("Check with Enter key", () => {
    const handler = jest.fn();
    render(<Checkbox label={"checkbox"} onChange={handler} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    fireEvent.keyDown(checkboxElement, {
      code: "Enter",
    });
    expect(handler).toBeCalledTimes(1);
  });
  test("Check with Space key", () => {
    const handler = jest.fn();
    render(<Checkbox label={"checkbox"} onChange={handler} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    fireEvent.keyDown(checkboxElement, {
      code: "Space",
    });
    expect(handler).toBeCalledTimes(1);
  });

  test("Check with Enter key", () => {
    const handler = jest.fn();
    render(<Checkbox label={"checkbox"} onChange={handler} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    fireEvent.keyDown(checkboxElement, {
      code: "Enter",
    });
    expect(handler).toBeCalledTimes(1);
  });
  test("Check with Space key", () => {
    const handler = jest.fn();
    render(<Checkbox label={"checkbox"} onChange={handler} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    fireEvent.keyDown(checkboxElement, {
      code: "Space",
    });
    expect(handler).toBeCalledTimes(1);
  });
});
