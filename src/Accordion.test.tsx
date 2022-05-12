import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Accordion } from "./components";

describe("Accordion", () => {
  test("Closed accordion", () => {
    const title = "Test";
    render(
      <Accordion show={false} setShow={() => {}} title={title}>
        <div>this is test content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("accordion-title");
    expect(accordionTitle).toBeInTheDocument();
    expect(accordionTitle).toHaveTextContent(title);
  });
  test("Open accordion", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <Accordion show={false} setShow={handler} title={title}>
        <div>Accordion content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("accordion-title");
    fireEvent.click(accordionTitle);
    expect(handler).toBeCalledTimes(1);
  });
  test("Closed accordion styles", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <Accordion show={false} setShow={handler} title={title}>
        <div>Accordion content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("accordion-title");
    expect(accordionTitle).not.toHaveStyle({
      backgroundColor: "#f5f7f6",
      padding: "0 1rem",
      borderBottom: "0.5px solid",
      margin: 0,
    });
  });
  test("Open accordion styles", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <Accordion show={true} setShow={handler} title={title}>
        <div>Accordion content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("accordion-title");
    expect(accordionTitle).toHaveStyle({
      backgroundColor: "#f5f7f6",
      padding: "0 1rem",
      borderBottom: "0.5px solid",
      margin: 0,
    });
  });
  test("Accordion keyboard events", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <Accordion show={false} setShow={handler} title={title}>
        <div>Accordion content</div>
      </Accordion>
    );
    const accordionTitle = screen.getByTestId("accordion-title");
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
