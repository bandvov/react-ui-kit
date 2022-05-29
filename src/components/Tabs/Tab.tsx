import React from "react";
import Button from "../Button/Button";

export default function Tab({
  label,
  onClick,
  value,
  buttonStyles = {},
  activeButtonStyles = {},
  ...rest
}: {
  buttonStyles?: { [key: string]: string };
  activeButtonStyles?: { [key: string]: string };
  fullWidth?: boolean;
  label: string;
  onClick: (value: number | string) => void;
  value: string | number;
}) {
  return (
    <Button
      padding="1rem"
      style={value === label ? activeButtonStyles : buttonStyles}
      onClick={() => onClick(value)}
      color={value === label ? "" : "lightgray"}
      borderRadius="0"
      {...rest}
    >
      {label}
    </Button>
  );
}
