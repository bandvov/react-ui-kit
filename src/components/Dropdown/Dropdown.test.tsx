import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Dropdown from "./Dropdown";

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
      top: "40px",
      opacity: 1,
      overflow: "",
      // boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.12)",
      // left: "calc(-41.5px + 50%)",
    });
  });

  test("Open on top left", () => {
    render(
      <Dropdown
        position="left-top"
        title="Test"
        isOpen={true}
        onClick={() => {}}
      >
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      bottom: "40px",
      left: 0,
      opacity: 1,
    });
  });
  test("Open on top right", () => {
    render(
      <Dropdown
        position="right-top"
        title="Test"
        isOpen={true}
        onClick={() => {}}
      >
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      bottom: "40px",
      right: 0,
      opacity: 1,
    });
  });
  test("Open on bottom right", () => {
    render(
      <Dropdown
        position="right-bottom"
        title="Test"
        isOpen={true}
        onClick={() => {}}
      >
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      top: "40px",
      right: 0,
      opacity: 1,
    });
  });
  test("Open on bottom left", () => {
    render(
      <Dropdown
        position="left-bottom"
        title="Test"
        isOpen={true}
        onClick={() => {}}
      >
        <div>default</div>
      </Dropdown>
    );
    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveStyle({
      top: "40px",
      left: 0,
      opacity: 1,
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
      width: "calc(100% + 3px)",
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
  test("Dropdown keyDown handler", () => {
    const setOpen = jest.fn();
    render(
      <Dropdown title="Test" isOpen={true} onKeyDown={() => setOpen(true)}>
        <div>default</div>
      </Dropdown>
    );
    const button = screen.getByTestId("button");
    fireEvent.keyDown(button, { code: "Escape" });
    expect(setOpen).toHaveBeenCalledTimes(1);
  });
  test("Dropdown blur close", () => {
    const setOpen = jest.fn();
    render(
      <Dropdown title="Test" isOpen={true} onKeyDown={() => setOpen(false)}>
        <div>default</div>
      </Dropdown>
    );
    fireEvent.click(document);
    expect(setOpen).toBeCalledTimes(1);
    expect(setOpen).toBeCalledWith(false);
  });
});
