import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  rtl.render(<App />);
});
