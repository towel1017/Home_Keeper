import "@testing-library/jest-dom";
import { render, screen } from "../test-utils";

import HomeKeeper from "../../pages/index";

describe("HomeKeeper", () => {
  it("render start page", () => {
    render(<HomeKeeper />);
    expect(screen.getByText("홈키퍼"));
  });
});
