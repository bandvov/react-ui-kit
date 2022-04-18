import { fireEvent, render, screen } from "@testing-library/react";
import { composeStories, composeStory } from "@storybook/testing-react";

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
import Meta, { DefaultButton } from "../stories/MyButton.stories";
import { COLORS } from "../CONSTANTS";

// Returns a component that already contain all decorators from story level, meta level and global level.
const Button = composeStory(DefaultButton, Meta);

describe("Button tests", () => {
  test("onclick handler is called", () => {
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy} />);
    const buttonElement = screen.getByText(/Button/i);
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
  test("Test default button styles", () => {
    render(<Button onClick={() => {}}>Default</Button>);
    const buttonElement = screen.getByText(/Default/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: COLORS.Blue,
      fontSize: "16px",
      padding: ".5rem 1rem",
    });
  });
  test("Test Default outlined button styles", () => {
    render(
      <Button variant="default-outlined" onClick={() => {}}>
        Default outlined
      </Button>
    );
    const buttonElement = screen.getByText(/Default outlined/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: "transparent",
      color: COLORS.Blue,
      outline: `1px solid ${COLORS.Blue}`,
      padding: ".5rem 1rem",
      // border-radius: 5px;
    });
  });
  test("Test Success button styles", () => {
    render(
      <Button variant="success" onClick={() => {}}>
        Success
      </Button>
    );
    const buttonElement = screen.getByText(/Success/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: COLORS.green,
    });
  });
  test("Test Success outlined button styles", () => {
    render(
      <Button variant="success-outlined" onClick={() => {}}>
        Success outlined
      </Button>
    );
    const buttonElement = screen.getByText(/Success outlined/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: "transparent",
      color: COLORS.green,
      outline: `1px solid ${COLORS.green}`,
      padding: ".5rem 1rem",
      // border-radius: 5px;
    });
  });
  test("Test Danger button styles", () => {
    render(
      <Button variant="danger" onClick={() => {}}>
        Danger
      </Button>
    );
    const buttonElement = screen.getByText(/Danger/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: COLORS.orange,
      padding: ".5rem 1rem",
      // border-radius: 5px;
    });
  });
  test("Test Danger outlined button styles", () => {
    render(
      <Button variant="danger-outlined" onClick={() => {}}>
        Danger outlined
      </Button>
    );
    const buttonElement = screen.getByText(/Danger outlined/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: "transparent",
      color: COLORS.orange,
      outline: `1px solid ${COLORS.orange}`,
      padding: ".5rem 1rem",
      // border-radius: 5px;
    });
  });
  test("Test Error button styles", () => {
    render(
      <Button variant="error" onClick={() => {}}>
        Error
      </Button>
    );
    const buttonElement = screen.getByText(/Error/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: COLORS.red,
      padding: ".5rem 1rem",
      // border-radius: 5px;
    });
  });
  test("Test Error outlined button styles", () => {
    render(
      <Button variant="error-outlined" onClick={() => {}}>
        Error outlined
      </Button>
    );
    const buttonElement = screen.getByText(/Error outlined/i);
    expect(buttonElement).toHaveStyle({
      backgroundColor: "transparent",
      color: COLORS.red,
      outline: `1px solid ${COLORS.red}`,
      padding: ".5rem 1rem",
      // border-radius: 5px;
    });
  });
  test("Button action", () => {
    const handler = jest.fn();
    render(<Button onClick={handler}>Button</Button>);
    const buttonElement = screen.getByText(/Button/i);
    fireEvent.click(buttonElement);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
