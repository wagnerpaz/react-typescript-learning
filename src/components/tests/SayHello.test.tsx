import React from "react";
import { render } from "@testing-library/react";
import SayHello from "../SayHello";

test("SayHello to is rendered properly", () => {
  const { container, rerender } = render(<SayHello />);
  expect(container.firstChild).toHaveTextContent("Hello someone!");

  rerender(<SayHello to="Wagner" />);
  expect(container.firstChild).toHaveTextContent("Hello Wagner!");
});
