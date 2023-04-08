import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from 'react-router-dom'

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a></a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});


test("Should render <Link> Component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});