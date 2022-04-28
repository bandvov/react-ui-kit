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
  test("Disabled", () => {
    const handler = jest.fn();
    render(<Checkbox disabled onChange={handler} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    expect(checkboxElement).toHaveStyle({
      color: COLORS.gray,
    });
  });
  test("Toggle checkbox", () => {
    const handler = jest.fn();
    render(<Checkbox variant="toggle" onChange={handler} checked={true} />);
    const checkboxElement = screen.getByTestId(/checkbox/i);
    expect(checkboxElement).toHaveStyle({
      color: "black",
      padding: "3px 0",
    });
  });
  test("Disabled toggle checkbox", () => {
    const handler = jest.fn();
    render(
      <Checkbox disabled variant="toggle" onChange={handler} checked={true} />
    );
    const checkboxElement = screen.getByTestId(/checkbox/i);
    expect(checkboxElement).toHaveStyle({
      color: COLORS.gray,
      padding: "3px 0",
    });
  });
});
