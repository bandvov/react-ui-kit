import React, { useState } from "react";
import { Dropdown } from "..";
import { COLORS } from "../../CONSTANTS";
import { IDropdownItem, IDropdown } from "../../types";

export default function Select({
  items,
  values,
  title,
  setValues,
  setItems,
  multi = false,
  height = "200px",
  ...rest
}: Omit<IDropdown, "isOpen" | "children"> & {
  values: number[];
  setValues: (items: number[]) => void;
  items: IDropdownItem[];
  setItems: (items: IDropdownItem[]) => void;
  multi?: boolean;
  height?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handler = (newValue: number) => {
    if (values.includes(newValue)) {
      setValues(values.filter((value) => value !== newValue));
    } else if (multi) {
      setValues([...values, newValue]);
    } else {
      setValues([newValue]);
      setIsOpen(false);
    }
  };

  const mappedItems = items.map((item) => {
    return (
      <li
        data-testId="list-item"
        tabIndex={0}
        role="option"
        aria-selected={values.includes(item.value)}
        onKeyDown={(e: any) => {
          if (e.code === "Space" || e.code === "Enter") {
            handler(item.value);
          } else if (e.code === "Escape") {
            setIsOpen(false);
          }
        }}
        onClick={(e) => {
          handler(item.value);
        }}
        style={{
          backgroundColor: values.includes(item.value) ? COLORS.Blue : "white",
          color: values.includes(item.value) ? "white" : "black",
          borderBottom: "0.5px solid",
          display: "flex",
          justifyContent: "stretch",
        }}
      >
        <span style={{ padding: "0.2rem .5rem" }}>{item.title}</span>
      </li>
    );
  });

  return (
    <Dropdown
      title={title}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      isOpen={isOpen}
      onClick={setIsOpen}
      {...rest}
    >
      <ul
        tabIndex={-1}
        role="listbox"
        style={{
          maxHeight: height,
          overflowY: "auto",
          margin: 0,
          padding: 0,
          border: "1px solid blue",
        }}
      >
        {mappedItems}
      </ul>
    </Dropdown>
  );
}
