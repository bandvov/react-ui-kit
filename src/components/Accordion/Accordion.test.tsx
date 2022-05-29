import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Accordion } from "..";

describe("Accordion", () => {
  test("Closed accordion", () => {
    const title = "Test";
    render(
      <Accordion title={title}>
        <div>this is test content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("button");
    expect(accordionTitle).toBeInTheDocument();
    expect(accordionTitle).toHaveTextContent(title);
  });
  test("Open accordion", () => {
    const title = "Test";
    render(
      <Accordion title={title}>
        <div>Accordion content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("button");
    fireEvent.click(accordionTitle);
  });
  test("Closed accordion styles", () => {
    const title = "Test";
    render(
      <Accordion title={title}>
        <div>Accordion content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("button");
    expect(accordionTitle).not.toHaveStyle({
      backgroundColor: "#f5f7f6",
      padding: "0 1rem",
      borderBottom: "0.5px solid",
      margin: 0,
    });
  });

  test.skip("Accordion keyboard events", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <Accordion title={title}>
        <div>Accordion content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("button");
    fireEvent.keyDown(accordionTitle, {
      code: "Enter",
    });
    expect(handler).toBeCalledTimes(1);
    fireEvent.keyDown(accordionTitle, {
      code: "Space",
    });
    expect(handler).toBeCalledTimes(2);
  });
});
