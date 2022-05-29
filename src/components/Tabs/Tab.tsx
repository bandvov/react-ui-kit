import React from "react";
import Button from "../Button/Button";

export default function Tab({
  label,
  onClick,
  active,
  buttonStyles = {},
  activeButtonStyles = {},
  ...rest
}: {
  buttonStyles?: { [key: string]: string };
  activeButtonStyles?: { [key: string]: string };
  fullWidth?: boolean;
  label: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <Button
      padding="1rem"
      style={active ? activeButtonStyles : buttonStyles}
      onClick={() => onClick()}
      color={active ? "" : "lightgray"}
      borderRadius="0"
      {...rest}
    >
      {label}
    </Button>
  );
}
