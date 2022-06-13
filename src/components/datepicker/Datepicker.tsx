import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../icons/larr.svg";
import { ReactComponent as RightArrow } from "../../icons/rarr.svg";

const StyledWeekName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 14px;
  color: gray;
`;
const StyledWeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  :hover {
    cursor: pointer;
    background-color: #01459733;
  }
`;
const StyledWeek = styled.div``;
const StyledDatepickerContainer = styled.div`
  border: 1px solid blue;
  ${StyledWeekName} {
    border-right: none;
  }
  ${StyledWeekName}:first-of-type {
    border-left: none;
  }
  div svg {
    padding: 0 8px;
  }

  div svg:hover {
    cursor: pointer;
  }

  div svg path {
    stroke: black;
  }
`;
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Datepicker() {
  const [date, setDate] = useState<Date>(new Date(2020, 1, 0));
  const [selectedDate, setSelectedDate] = useState<Date | null>();

  const [daysInMonth, setDaysInMonth] = useState<number>(
    new Date(2020, 1, 0).getDate()
  );

  useEffect(() => {
    setDaysInMonth(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    );
  }, [date]);

  const prevMonthHandler = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };
  const nextMonthHandler = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const getDays = () => {
    const monthStartOnWeekDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();

    const daysArray: Date[][] = [];
    let day = 1;

    for (let week = 0; week < (daysInMonth + monthStartOnWeekDay) / 7; week++) {
      daysArray[week] = [];
      for (let weekDay = 0; weekDay <= 6; weekDay++) {
        if (week === 0 && weekDay < monthStartOnWeekDay) {
          daysArray[week][weekDay] = new Date(
            date.getFullYear(),
            date.getMonth(),
            weekDay - monthStartOnWeekDay + 1
          );
        } else {
          daysArray[week][weekDay] = new Date(
            date.getFullYear(),
            date.getMonth(),
            day++
          );
        }
      }
    }
    return daysArray;
  };
  console.log(getDays());

  return (
    <StyledDatepickerContainer>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "4px",
          alignItems: "center",
        }}
      >
        <LeftArrow height={16} onClick={prevMonthHandler} />
        {months[date.getMonth()]} {date.getFullYear()}
        <RightArrow height={16} onClick={nextMonthHandler} />
      </div>
      <div style={{ display: "flex" }}>
        {weekday.map((day) => {
          return <StyledWeekName>{day.substring(0, 2)}</StyledWeekName>;
        })}
      </div>
      <div>
        {getDays().map((week) => {
          return (
            <StyledWeek
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {week.map((date) => {
                return (
                  <StyledWeekDay
                    onClick={() => setSelectedDate(date)}
                    style={{
                      backgroundColor:
                        selectedDate?.toISOString() === date?.toISOString()
                          ? "#014597"
                          : "",
                      color:
                        selectedDate?.toISOString() === date?.toISOString()
                          ? "white"
                          : "",
                    }}
                  >
                    {date?.getDate()}
                  </StyledWeekDay>
                );
              })}
            </StyledWeek>
          );
        })}
      </div>
    </StyledDatepickerContainer>
  );
}
