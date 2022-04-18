import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

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
});
