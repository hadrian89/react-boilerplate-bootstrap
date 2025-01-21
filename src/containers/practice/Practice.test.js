import { render, screen } from "@testing-library/react";
import Practice from "./Practice";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children, to }) => <a href={to}>{children}</a>, // Mock Link component
  useNavigate: jest.fn(), // Mock useNavigate hook if used
}));

test("renders Back link", () => {
  render(<Practice />);
  const linkElement = screen.getByText("Practice");
  expect(linkElement).toBeInTheDocument();
});
