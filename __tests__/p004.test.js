import P004 from "../src/prob/p004.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("P004 Class", () => {
  describe("aop Method", () => {
    it("Should return 906609 for the largest palindrome made from the product of two 3-digit numbers.", () => {
      assert.strictEqual(new P004().aop(), 906609);
    });
  });
});
