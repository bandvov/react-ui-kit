import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../CONSTANTS";
import { ReactComponent as LeftArrow } from "../../icons/larr.svg";
import { ReactComponent as RightArrow } from "../../icons/rarr.svg";

const StyledWeekName = styled.div`
  margin: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 14px;
  color: ${COLORS.Blue};
`;
const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  align-items: center;
`;
const StyledWeekDay = styled.button`
  background-color: transparent;
  margin: 0.5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  :hover {
    background-color: #01459733;
  }
`;
const StyledWeek = styled.div``;
const StyledDatepickerContainer = styled.div`
  border: 1px solid ${COLORS.Blue};
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
    stroke: ${COLORS.Blue};
  }
`;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

export default function Datepicker({
  minYear = new Date(Date.now()).getFullYear() - 2,
  maxYear = new Date(Date.now()).getFullYear() + 2,
}: {
  minYear?: number;
  maxYear?: number;
}) {
  const [date, setDate] = useState<Date>(new Date(Date.now()));
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
    if (date.getTime() < new Date(minYear, 1, 0).getTime()) return;
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };
  const nextMonthHandler = () => {
    if (date.getTime() > new Date(maxYear, 0, 0).getTime()) return;
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

  return (
    <StyledDatepickerContainer>
      <StyledTitle>
        <LeftArrow
          aria-label="go to previos month"
          title="go to previos month"
          style={{ padding: "5px" }}
          onKeyDown={(e: React.KeyboardEvent<HTMLOrSVGElement>) => {
            if (e.key === "Enter") {
              prevMonthHandler();
            }
          }}
          tabIndex={0}
          height={16}
          width={16}
          onClick={prevMonthHandler}
        />
        <span aria-label="active month">
          {months[date.getMonth()]} {date.getFullYear()}
        </span>
        <RightArrow
          aria-label="go to next month"
          title="go to previos month"
          style={{ padding: "5px" }}
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent<HTMLOrSVGElement>) => {
            if (e.key === "Enter") {
              nextMonthHandler();
            }
          }}
          height={16}
          width={16}
          onClick={nextMonthHandler}
        />
      </StyledTitle>
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
                const isSelectedDate =
                  selectedDate?.toISOString() === date?.toISOString();
                const isPassedDate =
                  date.getTime() < Date.now() - 1000 * 60 * 60 * 24;

                return (
                  <StyledWeekDay
                    tabIndex={isPassedDate ? -1 : 0}
                    onClick={() => {
                      if (isPassedDate) return;
                      setSelectedDate(date);
                    }}
                    style={{
                      backgroundColor: isSelectedDate
                        ? COLORS.Blue
                        : isPassedDate
                        ? "#aaaaaa22"
                        : "",
                      color: isSelectedDate
                        ? "white"
                        : isPassedDate
                        ? COLORS.lightgrey
                        : "",
                      border:
                        !isPassedDate &&
                        date.getTime() <
                          new Date(Date.now()).getTime() + 1000 * 360 * 24
                          ? `1px solid ${COLORS.Blue}`
                          : "",
                      cursor: isPassedDate ? "not-allowed" : "pointer",
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
