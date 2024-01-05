import { describe, it, expect } from "vitest";
import isStringLengthValid from "../utils/isStringLengthValid";

describe("isStringLengthValid", () => {
  it("returns true for a string with length 15", () => {
    expect(isStringLengthValid("123456789012345")).toBeTruthy();
  });

  it("returns true for a string with length 16", () => {
    expect(isStringLengthValid("1234567890123456")).toBeTruthy();
  });

  it("returns false for a string shorter than 15 characters", () => {
    expect(isStringLengthValid("12345678901234")).toBeFalsy();
  });

  it("returns false for a string longer than 16 characters", () => {
    expect(isStringLengthValid("12345678901234567")).toBeFalsy();
  });

  it("returns false for an empty string", () => {
    expect(isStringLengthValid("")).toBeFalsy();
  });

  it("returns false for a string of 15 spaces", () => {
    expect(isStringLengthValid("               ")).toBeFalsy();
  });

  // Adding a test case for a string with 16 spaces
  it("returns false for a string of 16 spaces", () => {
    expect(isStringLengthValid("                ")).toBeFalsy();
  });
});
