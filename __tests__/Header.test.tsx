import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

describe("Header", () => {
  it("renders a logo and navigation links", () => {
    // Render the component using the `render` method from @testing-library/react
    render(<Header />);

    expect(screen.getByAltText("Piano")).toBeInTheDocument();

    // Assert that navigation links are visible
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Demos" })).toHaveAttribute("href", "/demos");
    expect(screen.getByRole("link", { name: "Guides" })).toHaveAttribute("href", "/guides");
    expect(screen.getByRole("link", { name: "Docs site" })).toHaveAttribute("href", "https://docs.piano.io/");
  });
});