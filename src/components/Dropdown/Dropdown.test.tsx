import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Dropdown from "./Dropdown";
import { debug } from "util";

describe("Dropdown", () => {
  test("Default dropdown", () => {
    render(
      <Dropdown title="Test" isOpen={true} onClick={() => {}}>
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
      <Dropdown position="top" title="Test" isOpen={true} onClick={() => {}}>
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      backgroundColor: "white",
      bottom: "40px",
      opacity: 1,
      // left: "calc(-41.5px + 50%)",
      // boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.12)",
    });
  });
  test("Open left", () => {
    render(
      <Dropdown position="left" title="Test" isOpen={true} onClick={() => {}}>
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
  test("Fullwidth", () => {
    render(
      <Dropdown fullWidth title="Test" isOpen={true} onClick={() => {}}>
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      width: "100%",
    });
  });
  test("Closed dropdown", () => {
    render(
      <Dropdown title="Test" isOpen={false} onClick={() => {}}>
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      opacity: 0,
      overflow: "hidden",
      height: 0,
    });
  });

  test("Dropdown click handler", () => {
    const setOpen = jest.fn();
    render(
      <Dropdown title="Test" isOpen={true} onClick={() => setOpen(true)}>
        <div>default</div>
      </Dropdown>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(setOpen).toHaveBeenCalledTimes(1);
  });
  test("Dropdown MouseEnter handler", () => {
    const setOpen = jest.fn();
    render(
      <Dropdown title="Test" isOpen={true} onMouseEnter={() => setOpen(true)}>
        <div>default</div>
      </Dropdown>
    );
    const button = screen.getByTestId("button");
    fireEvent.mouseEnter(button);
    expect(setOpen).toHaveBeenCalledTimes(1);
  });
  test("Dropdown MouseLeave handler", () => {
    const setOpen = jest.fn();
    render(
      <Dropdown title="Test" isOpen={true} onMouseLeave={() => setOpen(true)}>
        <div>default</div>
      </Dropdown>
    );
    const button = screen.getByTestId("button");
    fireEvent.mouseLeave(button);
    expect(setOpen).toHaveBeenCalledTimes(1);
  });
});
