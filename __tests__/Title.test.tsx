import { render, screen } from "@testing-library/react";
import Title from "@/components/Title/Title";
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

describe("Title component", () => {
  it("renders an h1 title with correct styles when category is h1", () => {
    render(<Title category="h1">Hello World</Title>);
    const heading = screen.getByRole("heading", { name: "Hello World" });
    expect(heading).toHaveClass("pn-title");
  });

  it("renders an h2 subtitle with correct styles when category is h2", () => {
    render(<Title category="h2">Hello World</Title>);
    const heading = screen.getByRole("heading", { name: "Hello World" });
    expect(heading).toHaveClass("pn-subtitle");
  });

  it("renders an h3 section title with correct styles when category is h3", () => {
    render(<Title category="h3">Hello World</Title>);
    const heading = screen.getByRole("heading", { name: "Hello World" });
    expect(heading).toHaveClass("pn-section-title");
  });

  it("renders nothing when no category prop is passed", () => {
    render(<Title>Hello World</Title>);
    expect(screen.queryByRole("heading")).toBeNull();
  });
});