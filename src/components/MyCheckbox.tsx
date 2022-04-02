import React from "react";
import styled from "styled-components";
import { COLORS } from "../CONSTANTS";

const StyledCheckbox = styled.div`
  align-items: center;
  label {
    display: flex;
  }
  span {
    margin-left: 5px;
  }
  input[type="checkbox"] {
    display: none;
  }
`;

export default function Checkbox({
  handler,
  checked = true,
  label,
  ...props
}: {
  checked: boolean;
  label?: string;
  handler: () => void;
}) {
  return (
    <StyledCheckbox>
      <label
        tabIndex={0}
        onKeyDown={(e): void => {
          if (e.code === "Space" || e.code === "Enter") {
            handler();
          }
        }}
      >
        {" "}
        <div
          style={{
            width: "40px",
            height: "20px",
            border: `1px solid ${checked ? COLORS.Blue : "gray"}`,
            backgroundColor: checked ? "white" : "lightgray",
            borderRadius: "22px",
            padding: "1px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: checked ? COLORS.Blue : "gray",
              marginLeft: checked ? "20px" : 0,
              transition: ".3s",
            }}
          ></div>
        </div>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={handler}
          {...props}
        />
        <span>{label}</span>
      </label>
    </StyledCheckbox>
  );
}
