import React from "react";

import { render } from "../../../test-utils";

import DatePagination from "@components/DatePagination";

describe("DatePagination UI render tests", () => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  it("Date renders date texts", () => {
    const { container } = render(<DatePagination year={year} month={month} day={day} />);

    expect(container.getElementsByTagName("h2")[0].textContent).toEqual(year.toString());
    expect(container).toHaveTextContent(monthNames[month]);
    expect(container).toHaveTextContent(monthNames[month - 1]);
    expect(container).toHaveTextContent(monthNames[month + 1]);
    expect(container).toHaveTextContent(day.toString());
  });
});
