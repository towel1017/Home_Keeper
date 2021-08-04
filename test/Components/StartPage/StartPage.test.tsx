import React from "react";

import { render } from "../../test-utils";

import HomeKeeper from "../../../pages";

describe("StartPage tests", () => {
  it("StartPage render tests", () => {
    const { container } = render(<HomeKeeper />);

    expect(container).toHaveTextContent("우리집의 작은 경제 지킴이");
  });
});
