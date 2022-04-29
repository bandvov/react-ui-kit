import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Backdrop from "./Backdrop";

describe("Backdrop", () => {
  test("Styles", async () => {
    render(<Backdrop open={true} setOpen={() => {}} />);
    await waitFor(() => {
      const backdrop = screen.queryByTestId("backdrop");
      expect(backdrop).toBeInTheDocument();
      expect(backdrop).toHaveStyle({
        zIndex: "100",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      });
      expect(document.body).toHaveStyle({
        overflow: "hidden",
      });
    });
  });
  test("Closed backdrop", async () => {
    const setOpen = jest.fn();
    render(<Backdrop open={false} setOpen={setOpen} />);
    await waitFor(() => {
      const backdrop = screen.queryByTestId("backdrop");
      expect(backdrop).toBeNull();
    });
  });
  test("Handler", async () => {
    const setOpen = jest.fn();
    render(<Backdrop open={true} setOpen={setOpen} />);
    await waitFor(() => {
      const backdrop = screen.queryByTestId("backdrop");
      fireEvent.click(backdrop!);
      expect(setOpen).toBeCalledTimes(1);
    });
  });
});
