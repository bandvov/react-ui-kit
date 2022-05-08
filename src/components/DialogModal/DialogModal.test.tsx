import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Button/Button";
import DialogModal from "./DialogModal";

describe("Dialog modal", () => {
  test("Default dialog modal", async () => {
    const clickHandler = jest.fn();
    const openHandler = jest.fn();

    render(
      <DialogModal
        open={true}
        body={<div>Dialog body</div>}
        header={<div>Dialog header</div>}
        onClick={clickHandler}
        footer={
          <Button
            onClick={() => {
              openHandler(false);
            }}
          >
            Click
          </Button>
        }
      />
    );
    const header = screen.getByTestId("dialog-header");
    expect(header).toBeInTheDocument();
    const buttons = screen.getAllByTestId("button");
    fireEvent.click(buttons[0]);
    expect(clickHandler).toBeCalledWith(false);
  });
});
