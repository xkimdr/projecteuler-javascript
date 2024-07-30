import P002 from "../src/prob/p002.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("P002 Class", () => {
  describe("aop Method", () => {
    it("Should return 4613732 for the sum of the even-valued terms of Fibonacci sequence whose values do not exceed 4 million.", () => {
      assert.strictEqual(new P002().aop(), 4613732);
    });
  });
});
