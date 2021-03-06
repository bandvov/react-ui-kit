import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../CONSTANTS";

interface IInput {
  error: boolean;
  disabled?: boolean;
}
const Label = styled.label<IInput>`
  position: relative;
  display: inline-block;
  color: "";
  ${(props) => {
    if (props.error) {
      return css`
        color: COLORS.red;
      `;
    }
  }};
  span {
    pointer-events: none;
    position: absolute;
    left: 0.5rem;
    top: 5px;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity: 0.5;
  }
`;
const Input = styled.input.attrs({ type: "text" })<IInput>`
  border: 1px solid ${(props) => (props.error ? COLORS.red : COLORS.Blue)};
  border-radius: 4px;
  z-index: 1;
  transition: all 1s ease-in-out;
  padding: 0.5rem;
  color: ${(props) => (props.error ? COLORS.red : "")};
  :focus {
    outline: none;
    box-shadow: 0 0 0.5px 0.5px
      ${(props) => (props.error ? COLORS.red : COLORS.Blue)}b0;
  }
  :focus + span,
  :not(:placeholder-shown) + span {
    padding: 0 0.2rem;
    opacity: 1;
    line-height: 16px;
    transform: scale(0.5) translateY(-170%) translateX(-45px);
    background-color: white;
    color: ${(props) => (props.error ? COLORS.red : COLORS.Blue)};
  }
`;
export default function TextInput({
  placeholder,
  error = false,
  value,
  onChange = () => {},
  helperText,
  ...props
}: {
  onChange?: (value: string) => void;
  value?: string;
  error?: boolean;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label error={error}>
        <Input
          onChange={(e) => {
            console.log("onChange");
            onChange(e.currentTarget.value);
          }}
          error={error}
          placeholder=" "
          value={value}
          {...props}
        />
        <span>{placeholder}</span>
      </Label>
      {helperText && (
        <span
          style={{
            color: error ? "red" : "",
            fontSize: "10px",
            padding: "5px 10px 15px",
          }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
