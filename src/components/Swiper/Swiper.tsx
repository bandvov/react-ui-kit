import React, { ReactElement, useRef, useState } from "react";
import styled from "styled-components";

const StyledSwiper = styled.div`
  display: flex;
  width: 50vw;
  position: relative;
`;
export default function Swiper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);

  const [offsetX, setOffsetX] = useState(0);

  const onTouchStart = (e: any) => {
    const clientX = e.clientX ? e.clientX : e.touches[0].clientX;

    startXRef.current = offsetX + clientX;

    window.addEventListener("mouseup", onTouchEnd);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mousemove", onTouchMove);
  };

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
  };

  const onTouchEnd = () => {
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mousemove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
    window.removeEventListener("touchend", onTouchEnd);
  };

  return (
    <StyledSwiper
      ref={containerRef}
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
      // onMouseUp={(e) => {}}
      // onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => {}}
      style={{ border: "3px solix" }}
      onMouseLeave={onTouchEnd}
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
  );
}
