import React, { ReactElement, useRef, useState, useEffect } from "react";
import Button from "../components/Button";

export default function Dropdown({
  isOpen,
  title,
  children,
  toggle,
}: {
  toggle: () => void;
  isOpen: boolean;
  title: string;
  children: ReactElement| ReactElement[];
}) {

  return (
    <div style={{ position: "relative" }}>
      <Button
      variant={"default-outlined"}
        style={{
          margin:"auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={toggle}
      >
        {title} {isOpen ? <span>&#708;</span> : <span>&#709;</span>}
      </Button>
      <div
        style={{
      
          width: "max-content",
          top: "50px",
          left: 'calc(50% - 90px)',
          opacity: isOpen ? 1 : 0,
          transition: "all .2s ",
          boxShadow: `0 1em 1em rgba(0,0,0,0.1),
          0 0  0 2px rgb(255,255,255),
          0.1em 0.1em .5em rgba(0,0,0,0.3)`,
          height: isOpen ? "" : 0,
          position: "absolute",
        }}
      >
        {children}
      </div>
    </div>
  );
}
