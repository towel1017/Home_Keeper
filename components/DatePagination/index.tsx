import React from "react";

import * as S from "./style";

interface DatePaginationProps {
  year: number;
  month: number;
  day: number;
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DatePagination: React.FC<DatePaginationProps> = ({ year, month, day }) => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.YearText>{year}</S.YearText>
        <div>
          <S.SubMonthText>{monthNames[month - 1]}</S.SubMonthText>
          <S.MonthText>{monthNames[month]}</S.MonthText>
          <S.SubMonthText>{monthNames[month + 1]}</S.SubMonthText>
        </div>
        <S.DayText>{day}</S.DayText>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default DatePagination;
