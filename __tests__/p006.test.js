import P006 from "../src/prob/p006.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("P006 Class", () => {
  describe("aop Method", () => {
    it("Should return 25164150 for the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.", () => {
      assert.strictEqual(new P006().aop(), 25164150);
    });
  });
});
