import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../CONSTANTS";
import { ILabel } from "../../types";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })<{
  name: string;
}>`
  display: none;
`;

const ToggleCheckbox = styled.label<ILabel>`
  position: relative;
  color: ${(props) => (props.disabled ? COLORS.gray : "black")};
  display: flex;
  line-height: 16px;
  padding: 3px 0;
  ::before {
    content: "";
    width: 28px;
    height: 14px;
    border: 1px solid
      ${(props) =>
        !props.checked || props.disabled ? COLORS.gray : COLORS.Blue};
    background-color: ${(props) =>
      !props.checked || props.disabled ? COLORS.lightgrey : "white"};
    border-radius: 9px;
    padding: 1px;
  }
  ::after {
    content: "";
    position: absolute;
    top: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${(props) =>
      !props.checked || props.disabled ? "gray" : COLORS.Blue};
    margin-left: ${(props) => (props.checked ? "16px" : "2px")};
    transition: 0.3s;
  }
  :hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const ClassicCheckbox = styled.label<ILabel>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => (props.disabled ? COLORS.gray : "black")};
  line-height: 16px;
  padding: 3px 0;
  ::before {
    content: "";
    ${(props) => {
      return (
        props.rounded &&
        css`
          border-radius: 50%;
        `
      );
    }};
    width: 14px;
    height: 14px;
    border: 1px solid ${(props) => (props.disabled ? COLORS.gray : COLORS.Blue)};
  }
  ${(props) => {
    if (props.checked) {
      return css`
        ::before {
          background-color: ${props.disabled
            ? COLORS.gray
            : props.backgroundColor
            ? props.backgroundColor
            : COLORS.Blue};
          border: 1px solid
            ${props.backgroundColor ? props.backgroundColor : COLORS.Blue};
        }
        ::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 5px;
          top: 6px;
          border-left: 2px solid white;
          border-bottom: 2px solid white;
          transform: translateX(5px) rotate(-45deg);
          transform-origin: 4px 7px;
        }
      `;
    }
  }}
  :hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
const CheckboxContainer = styled.div`
  width: max-content;
  align-items: center;
  label {
    display: flex;
  }
  span {
    margin-left: 5px;
  }
`;

export default function Checkbox({
  onChange,
  checked = false,
  label,
  variant = "default",
  disabled,
  ...props
}: {
  backgroundColor?: string;
  rounded?: boolean;
  checked: boolean;
  disabled?: boolean;
  label?: string;
  variant?: "toggle" | "default";
  onChange: () => void;
}) {
  const Component = variant === "toggle" ? ToggleCheckbox : ClassicCheckbox;
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        disabled={disabled}
        name="checkbox"
        checked={checked}
        onChange={!disabled ? onChange : () => {}}
        {...props}
      />
      <Component
        aria-label="checkbox"
        aria-disabled={disabled}
        aria-checked={checked}
        data-testId={"checkbox"}
        disabled={disabled}
        htmlFor={"checkbox"}
        tabIndex={0}
        checked={checked}
        onClick={!disabled ? onChange : () => {}}
        {...props}
        onKeyDown={(e): void => {
          if (!disabled && (e.code === "Space" || e.code === "Enter")) {
            onChange();
          }
        }}
      >
        {label && <span> {label}</span>}
      </Component>
    </CheckboxContainer>
  );
}
