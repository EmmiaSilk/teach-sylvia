import { describe, it, expect } from "vitest";

describe("sum", () => {
  it("adds numbers", () => {
    const left = 5;
    const right = 3;

    const sum = left + right;

    expect(sum).toBe(8);
  });
});
