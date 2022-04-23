import { screen, render, Screen } from "@testing-library/react";
import React from "react";
import { COLORS } from "../../CONSTANTS";
import Button from "../Button/Button";
import Badge from "./Badge";

describe("Badge", () => {
  test("Default badge", () => {
    render(
      <Badge>
        <Button>Click</Button>
      </Badge>
    );
    const element = screen.getByTestId(/badge/i);
    expect(element).toHaveStyle({
      height: "10px",
      width: "10px",
      backgroundColor: COLORS.green,
      borderRadius: "50%",
      left: "80%",
      top: "0",
    });
  });
  test("Default badge with position bottom", () => {
    render(
      <Badge position="bottom">
        <Button>Click</Button>
      </Badge>
    );
    const element = screen.getByTestId(/badge/i);
    expect(element).toHaveStyle({
      height: "10px",
      width: "10px",
      backgroundColor: COLORS.green,
      left: "80%",
      bottom: 0,
      borderRadius: "50%",
    });
  });
});
