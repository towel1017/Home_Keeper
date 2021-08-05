import React from "react";

import { render } from "../../../test-utils";

import Main from "@pages/main";

describe("Header tests", () => {
  it("Header renders today date", () => {
    const { container } = render(<Main />);
    const today = new Date();
    const dateArr = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    expect(container).toHaveTextContent(`Today : ${dateArr.join(".")}`);
  });
});
