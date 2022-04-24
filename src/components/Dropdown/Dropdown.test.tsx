import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("Default dropdown", () => {
    render(
      <Dropdown title="Test" isOpen={true} setOpen={() => {}}>
        <div>default</div>
      </Dropdown>
    );

    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      backgroundColor: "white",
      top: "40px",
      opacity: 1,
      overflow: "",
      // boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.12)",
      // left: "calc(-41.5px + 50%)",
    });
  });

  test("Open on top", () => {
    render(
      <Dropdown position="top" title="Test" isOpen={true} setOpen={() => {}}>
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      backgroundColor: "white",
      bottom: "40px",
      opacity: 1,
      // boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.12)",
      // left: "calc(-41.5px + 50%)",
    });
  });
  test("Open left", () => {
    render(
      <Dropdown position="left" title="Test" isOpen={true} setOpen={() => {}}>
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      backgroundColor: "white",
      opacity: 1,
      // top: "calc(-84.5px + 50%)",
      // right: "calc(100% + 10px)",
      // boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.12)",
      // left: "calc(-41.5px + 50%)",
    });
  });
  test("Dropdown click handler", () => {
    const setOpen = jest.fn();
    render(
      <Dropdown title="Test" isOpen={true} setOpen={() => setOpen(true)}>
        <div>default</div>
      </Dropdown>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(setOpen).toHaveBeenCalledTimes(1);
  });
});
