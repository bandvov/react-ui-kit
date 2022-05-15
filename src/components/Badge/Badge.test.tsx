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
      left: "calc(100% - 10px)",
      top: 0,
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
      left: "calc(100% - 10px)",
      bottom: 0,
      borderRadius: "50%",
    });
  });
  test("Badge with label", () => {
    render(
      <Badge label={222}>
        <Button>Click</Button>
      </Badge>
    );
    const element = screen.getByTestId(/badge/i);
    expect(element).toHaveStyle({
      backgroundColor: COLORS.green,
      left: "calc(100% - 10px)",
      top: "-45%",
      borderRadius: "13px",
    });
  });
  test("Badge with custom background color", () => {
    render(
      <Badge background={COLORS.red}>
        <Button>Click</Button>
      </Badge>
    );
    const element = screen.getByTestId(/badge/i);
    expect(element).toHaveStyle({
      backgroundColor: COLORS.red,
    });
  });
});
