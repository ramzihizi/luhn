import { describe, it, expect } from "vitest";
import isValidLuhn from "../utils/isValidLuhn";

describe("isValidLuhn", () => {
  it("should return true for a valid credit card number", () => {
    expect(isValidLuhn("4556737586899855")).toBeTruthy();
  });

  it("should return false for an invalid credit card number", () => {
    expect(isValidLuhn("1234567890123456")).toBeFalsy();
  });

  it("should return false for a string with non-numeric characters", () => {
    expect(isValidLuhn("1234abcd5678efgh")).toBeFalsy();
  });

  it("should return true for a valid American Express card number", () => {
    // Use a valid American Express card number that passes the Luhn check
    expect(isValidLuhn("378282246310005")).toBeTruthy();
  });

  it("should return false for an invalid American Express card number", () => {
    // Invalid number but in American Express format
    expect(isValidLuhn("378282246310006")).toBeFalsy();
  });

  it("should return true for a valid Discover card number", () => {
    // Use a valid Discover card number that passes the Luhn check
    expect(isValidLuhn("6011111111111117")).toBeTruthy();
  });

  it("should return false for an invalid Discover card number", () => {
    // Invalid number but in Discover format
    expect(isValidLuhn("6011111111111118")).toBeFalsy();
  });

  it("should return true for a valid MasterCard number", () => {
    // Use a valid MasterCard number that passes the Luhn check
    expect(isValidLuhn("5555555555554444")).toBeTruthy();
  });

  it("should return false for an invalid MasterCard number", () => {
    // Invalid number but in MasterCard format
    expect(isValidLuhn("5555555555554445")).toBeFalsy();
  });
});
