import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

const tabItems = ["One", "Two", "Three"];

describe("Tabs", () => {
  test("Tabs should be in the document", () => {
    const handler = jest.fn();
    render(<Tabs items={tabItems} value={1} onChange={handler} />);
    const tabsContainer = screen.getByTestId("tabs");
    const tabs = screen.getAllByTestId("button");
    expect(tabsContainer).toMatchSnapshot();
    expect(tabs).toHaveLength(3);
  });
  test("Tab handler", () => {
    const handler = jest.fn();
    render(<Tabs items={tabItems} value={1} onChange={handler} />);
    const tabs = screen.getAllByTestId("button");
    fireEvent.click(tabs[0]);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(0);
  });
});
