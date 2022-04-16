import React, { ReactElement, useRef, useState, useEffect } from "react";
import Button from "../components/Button";

const iconPath = process.env.PUBLIC_URL + "/icons/";

export default function Dropdown({
  isOpen,
  title,
  children,
  setOpen,
}: {
  setOpen: (status: boolean) => void;
  isOpen: boolean;
  title: string;
  children: ReactElement | ReactElement[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setOpen]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <Button
        variant={"default-outlined"}
        style={{
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setOpen(!isOpen);
        }}
        onKeyDown={(e: any) => {
          if (e.code === "Escape") {
            setOpen(!isOpen);
          }
        }}
      >
        {title}{" "}
        <img
          style={{ margin: "auto" }}
          width={10}
          height={10}
          src={iconPath + (isOpen ? "arrow_down.svg" : "arrow_up.svg")}
        />
      </Button>
      <div
        style={{
          width: "max-content",
          top: "50px",
          left: "calc(50% - 90px)",
          overflow: "hidden",
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
