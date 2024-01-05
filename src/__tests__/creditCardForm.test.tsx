import { render, screen } from "@testing-library/react";
import CreditCardForm from "../components/CreditCardForm";
import { expect, test } from "vitest";

test("<CreditCardForm />", () => {
  render(<CreditCardForm />);
  expect(screen.getByText("Submit")).toBeDefined();
});
