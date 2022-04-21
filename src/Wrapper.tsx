import React, { ReactElement } from "react";

export default function Wrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div
      style={{
        width: "auto",
        padding: "1rem",
        border: "1px solid",
        gap: "20px",
        display: "flex",
        flexWrap: "wrap",
        flex: 1,
      }}
    >
      {children}
    </div>
  );
}
