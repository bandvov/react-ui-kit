import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Tab from "./Tab";

const StyledTabs = styled.div`
  display: flex;
  width: 50vw;
  position: relative;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export default function Tabs({
  value,
  onChange,
}: {
  value: string | number;
  onChange: Dispatch<SetStateAction<string>>;
}) {
  const [holding, setHolding] = useState(false);
  const [tabOffset, setTabOffset] = useState(0);
  const [prevTabOffset, setPrevTabOffset] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <div>{prevTabOffset}</div>
        <div>{tabOffset}</div>
      </div>
      <StyledTabs
        ref={tabsRef}
        onMouseDown={(e) => {
          setTabOffset(e.clientX);
          setHolding(true);
        }}
        onMouseUp={(e) => {
          setHolding(false);
        }}
        onMouseMove={(e) => {
          if (tabsRef.current && holding) {
            setPrevTabOffset(Math.floor(tabsRef.current.scrollLeft));
            if (tabOffset > e.clientX) {
              tabsRef.current.scrollLeft -= (e.clientX - tabOffset) / 20;
            } else {
              tabsRef.current.scrollLeft += (tabOffset - e.clientX) / 20;
            }
          }
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Tab
            fullWidth
            value={value}
            variant="error"
            onClick={() => {
              console.log("hello");
            }}
            label="One"
          />
          <Tab
            value={value}
            fullWidth
            variant="success"
            onClick={(value: any) => alert("hello")}
            label="Two"
          />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab value={value} fullWidth onClick={() => {}} label="Three" />
          <Tab
            value={value}
            fullWidth
            variant="danger"
            onClick={() => {}}
            label="Three"
          />
        </div>
      </StyledTabs>
    </div>
  );
}
