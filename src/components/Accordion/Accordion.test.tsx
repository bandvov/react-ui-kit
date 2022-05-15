import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AccordionItem } from "..";

describe("AccordionItem", () => {
  test("Closed accordion", () => {
    const title = "Test";
    render(
      <AccordionItem active={false} onToggle={() => {}} title={title}>
        <div>this is test content</div>
      </AccordionItem>
    );
    const accordionTitle = screen.getByTestId("button");
    expect(accordionTitle).toBeInTheDocument();
    expect(accordionTitle).toHaveTextContent(title);
  });
  test("Open accordion", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <AccordionItem active={false} onToggle={handler} title={title}>
        <div>AccordionItem content</div>
      </AccordionItem>
    );
    const accordionTitle = screen.getByTestId("button");
    fireEvent.click(accordionTitle);
    expect(handler).toBeCalledTimes(1);
  });
  test("Closed accordion styles", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <AccordionItem active={false} onToggle={handler} title={title}>
        <div>AccordionItem content</div>
      </AccordionItem>
    );
    const accordionTitle = screen.getByTestId("button");
    expect(accordionTitle).not.toHaveStyle({
      backgroundColor: "#f5f7f6",
      padding: "0 1rem",
      borderBottom: "0.5px solid",
      margin: 0,
    });
  });

  test.skip("AccordionItem keyboard events", () => {
    const title = "Test";
    const handler = jest.fn();
    render(
      <AccordionItem active={false} onToggle={handler} title={title}>
        <div>AccordionItem content</div>
      </AccordionItem>
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
