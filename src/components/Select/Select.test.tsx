import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";
import { COLORS } from "../../CONSTANTS";

const RenderSelect = ({ multi }: { multi?: boolean }) => {
  const [values, setValues] = useState<number[]>([]);
  return (
    <Select
      multi={multi}
      values={values}
      setValues={setValues}
      title="I am select"
      items={[
        {
          value: 0,
          title: "New York",
        },
        {
          value: 1,
          title: "Dublin",
        },
        {
          value: 2,
          title: "California",
        },
      ]}
    />
  );
};

describe("Select", () => {
  test("Render items", () => {
    render(<RenderSelect />);
    const button = screen.getByTestId("button");
    const listItems = screen.getAllByTestId("list-item");
    fireEvent.click(button);
    expect(listItems).toHaveLength(3);
  });
  test("Render items", () => {
    const handler = jest.fn();
    render(
      <Select
        values={[]}
        setValues={handler}
        title="I am select"
        items={[
          {
            value: 0,
            title: "New York",
          },
          {
            value: 1,
            title: "Dublin",
          },
          {
            value: 2,
            title: "California",
          },
        ]}
      />
    );
    const button = screen.getByTestId("button");
    const listItems = screen.getAllByTestId("list-item");
    fireEvent.click(button);
    fireEvent.click(listItems[0]);
    expect(handler).toHaveBeenLastCalledWith([0]);
  });
  test("Active item styles", () => {
    render(<RenderSelect />);
    const button = screen.getByTestId("button");
    const listItems = screen.getAllByTestId("list-item");
    fireEvent.click(button);
    fireEvent.click(listItems[0]);
    expect(listItems[0]).toHaveStyle({
      backgroundColor: COLORS.Blue,
      color: "white",
    });
  });
  test("Select with keyboard", () => {
    render(<RenderSelect />);
    const button = screen.getByTestId("button");
    const title = screen.getByText("New York");
    const listItems = screen.getAllByTestId("list-item");
    fireEvent.click(button);
    fireEvent.keyDown(listItems[0], { code: "Enter" });
    const children = screen.getByTestId("children");
    expect(children).toHaveStyle({
      height: 0,
    });
    expect(title).toBeInTheDocument();
  });
  test("Multi Select with keyboard", () => {
    render(<RenderSelect multi={true} />);
    const button = screen.getByTestId("button");
    const listItems = screen.getAllByTestId("list-item");
    fireEvent.click(button);
    fireEvent.keyDown(listItems[0], { code: "Enter" });
    fireEvent.keyDown(listItems[1], { code: "Enter" });

    const title = screen.getByText("2 selected");

    expect(title).toBeInTheDocument();
  });
  test("Close with keyboard", () => {
    render(<RenderSelect />);
    const button = screen.getByTestId("button");
    const listItems = screen.getAllByTestId("list-item");
    fireEvent.click(button);
    fireEvent.keyDown(listItems[0], { code: "Escape" });
    const children = screen.getByTestId("children");
    expect(children).toHaveStyle({
      height: 0,
    });
  });
});
