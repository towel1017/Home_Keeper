import DatePagination from "@components/DatePagination";
import React from "react";

const DatePaginationContainer: React.FC = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  return <DatePagination year={year} month={month} day={day} />;
};

export default DatePaginationContainer;
