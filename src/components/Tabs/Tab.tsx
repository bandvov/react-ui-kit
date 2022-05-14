import React from "react";
import Button from "../Button/Button";
import { Variant } from "../../types";
export default function Tab({
  label,
  onClick,
  value,
  ...rest
}: {
  fullWidth?: boolean;
  variant?: Variant | undefined;
  label: string;
  onClick: (value: number | string) => void;
  value: string | number;
}) {
  return (
    <Button
      onClick={() => onClick(value)}
      color={value === label ? "" : "lightgray"}
      borderRadius="0"
      {...rest}
    >
      {label}
    </Button>
  );
}
