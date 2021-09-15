import React from "react";

import { render } from "../../../test-utils";

import DatePagination from "@components/DatePagination";

describe("DatePagination tests", () => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const { container } = render(<DatePagination />);
  const today = new Date();

  it("Date renders year texts", () => {
    const year = today.getFullYear().toString();
    expect(container).toHaveTextContent(year);
  });

  it("Date renders month texts", () => {
    const month = monthNames[today.getMonth()];
    expect(container).toHaveTextContent(month);
  });

  it("Date renders prev month texts", () => {
    const prevMonth = monthNames[today.getMonth() - 1];
    expect(container).toHaveTextContent(prevMonth);
  });

  it("Date renders next month texts", () => {
    const nextMonth = monthNames[today.getMonth() + 1];
    expect(container).toHaveTextContent(nextMonth);
  });

  it("Date renders day texts", () => {
    const day = today.getDate().toString();
    expect(container).toHaveTextContent(day);
  });
});
