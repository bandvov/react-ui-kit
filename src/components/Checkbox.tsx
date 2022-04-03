import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../CONSTANTS";

interface ILabel {
  checked?: boolean;
  before?: any;
  disabled?: boolean;
}
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })<{
  name: string;
}>`
  display: none;
`;

const ToggleCheckbox = styled.label<ILabel>`
  position: relative;
  input[type="checkbox"] {
    background-color: red;
  }
  ::before {
    content: "";
    width: 28px;
    height: 14px;
    border: 1px solid ${(props) => (props.checked ? COLORS.Blue : COLORS.gray)};
    background-color: ${(props) =>
      props.checked ? "white" : COLORS.lightgrey};
    border-radius: 9px;
    padding: 1px;
  }
  ::after {
    content: "";
    position: absolute;
    top: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${(props) => (props.checked ? COLORS.Blue : "gray")};
    margin-left: ${(props) => (props.checked ? "16px" : "2px")};
    transition: 0.3s;
  }
`;
const ClassicCheckbox = styled.label<ILabel>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => (props.disabled ? COLORS.gray : "black")};
  ::before {
    content: "";
    width: 14px;
    height: 14px;
    border: 1px solid ${(props) => (props.disabled ? COLORS.gray : COLORS.Blue)};
    background-color: white;
  }
  ${(props) => {
    if (props.checked) {
      return css`
        ::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 5px;
          top: 6px;
          border-left: 2px solid ${props.disabled ? COLORS.gray : COLORS.Blue};
          border-bottom: 2px solid ${props.disabled ? COLORS.gray : COLORS.Blue};
          transform: translateX(5px) rotate(-45deg);
          transform-origin: 4px 7px;
        }
      `;
    }
  }}
`;
const CheckboxContainer = styled.div`
  align-items: center;
  label {
    display: flex;
  }
  span {
    margin-left: 5px;
  }
`;

export default function Checkbox({
  handler,
  checked = true,
  label,
  variant = "default",
  ...props
}: {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  variant?: "toggle" | "default";
  handler: () => void;
}) {
  const Component = variant === "toggle" ? ToggleCheckbox : ClassicCheckbox;
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        name="checkbox"
        checked={checked}
        onChange={handler}
        {...props}
      />
      <Component
        htmlFor={"checkbox"}
        tabIndex={0}
        checked={checked}
        onClick={handler}
        {...props}
        onKeyDown={(e): void => {
          if (e.code === "Space" || e.code === "Enter") {
            handler();
          }
        }}
      >
        <span> {label}</span>
      </Component>
    </CheckboxContainer>
  );
}
