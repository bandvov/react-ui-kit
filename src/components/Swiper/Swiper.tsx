import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../icons/larr.svg";
import { ReactComponent as RightArrow } from "../../icons/rarr.svg";

const StyledSwiper = styled.div<{ width: string }>`
  > div {
    transition: transform 0.3s ease-out;
  }
  box-sizing: border-box;
  display: flex;
  width: ${(props) => props.width};
  overflow: hidden;
  position: relative;
`;
export default function Swiper({
  children,
  width = "100%",
}: {
  width?: string;
  children: ReactElement | ReactElement[];
}) {
  const [idx, setIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX] = useState(0);
  const offsetXRef = useRef(0);

  const onTouchStart = (e: any) => {
    const clientX = e.clientX ? e.clientX : e.touches[0].clientX;

    startXRef.current = offsetX + clientX;

    window.addEventListener("mouseup", onTouchEnd);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mousemove", onTouchMove);
  };

  useEffect(() => {
    if (containerRef.current) {
      setOffsetX(idx * containerRef.current?.offsetWidth);
    }
  }, [idx]);

  const onTouchMove = (e: any) => {
    const currentX = e.clientX ? e.clientX : e.touches[0].clientX;

    const diff = startXRef.current - currentX;

    const currentOffsetLeft = childrenRef.current?.offsetLeft || 0;

    let newOffset = currentOffsetLeft + diff;
    if (newOffset < 0) {
      newOffset = 0;
    }
    if (
      newOffset >
      childrenRef.current!.offsetWidth - containerRef.current!.offsetWidth
    ) {
      newOffset =
        childrenRef.current!.offsetWidth - containerRef.current!.offsetWidth;
    }
    setOffsetX(newOffset);
    offsetXRef.current = newOffset;
  };

  const onTouchEnd = () => {
    const newIdx = Math.round(
      offsetXRef.current / containerRef.current!.offsetWidth
    );
    setIdx(newIdx);
    const newOffset = newIdx * containerRef.current!.offsetWidth;
    console.log(idx);

    setOffsetX(newOffset);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mousemove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
    window.removeEventListener("touchend", onTouchEnd);
  };

  const prevSlideHandler = () => {
    if (idx <= 0) return;
    setIdx(idx - 1);
  };
  const nextSlideHandler = () => {
    const containerOffsetWidth = containerRef.current!.offsetWidth;
    if (
      !(
        offsetX + containerOffsetWidth >
        childrenRef.current!.offsetWidth - containerOffsetWidth
      )
    ) {
      setIdx(idx + 1);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <LeftArrow
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: "50%",
          transform: "translateY(-50%) translateX(-50%)",
          zIndex: 1111111,
          position: "absolute",
          border: "1px solid",
          left: 0,
          cursor: "pointer",
          padding: "3px",
          borderRadius: "50%",
        }}
        onClick={prevSlideHandler}
        height={20}
        width={20}
      />
      <div>
        <RightArrow
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: "50%",
            transform: "translateY(-50%) translateX(50%)",
            zIndex: 1111111,
            position: "absolute",
            border: "1px solid",
            right: 0,
            cursor: "pointer",
            padding: "3px",
            borderRadius: "50%",
          }}
          onClick={nextSlideHandler}
          height={20}
          width={20}
        />
      </div>
      <StyledSwiper
        width={width}
        ref={containerRef}
        onTouchStart={onTouchStart}
        onMouseDown={onTouchStart}
        style={{ border: "3px solix" }}
      >
        <div
          ref={childrenRef}
          style={{
            display: "flex",
            transform: `translateX(-${offsetX}px)`,
          }}
        >
          {children}
        </div>
      </StyledSwiper>
      <div style={{ display: "flex" }}></div>
    </div>
  );
}
