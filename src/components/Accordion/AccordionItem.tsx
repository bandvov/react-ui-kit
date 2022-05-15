import React, { ReactElement, useRef } from "react";
import Button from "../Button/Button";

export default function AccordionItem({
  title,
  children,
  onToggle,
  active,
  buttonStyles,
}: {
  buttonStyles?: { [key: string]: string };
  title: string;
  active: boolean;
  children: ReactElement | string;
  onToggle: () => void;
}) {
  const childrenRef = useRef<HTMLDivElement>(null);

  return (
    <li>
      <Button
        style={buttonStyles}
        borderRadius="0"
        fullWidth
        justify="space-between"
        onClick={onToggle}
      >
        {title}
        <span>{active ? "-" : "+"} </span>
      </Button>
      <div
        ref={childrenRef}
        style={{
          overflow: "hidden",
          height: active
            ? (childrenRef.current as HTMLDivElement).scrollHeight
            : 0,
          transition: "height ease 0.2s",
          backgroundColor: "#edf2f2",
        }}
      >
        <div>{children}</div>
      </div>
    </li>
  );
}
