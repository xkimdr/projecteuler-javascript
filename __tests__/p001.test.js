import P001 from "../src/prob/p001.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("P001 Class", () => {
  describe("aop Method", () => {
    it("Should return 233168 for the sum of multiples of 3 or 5 below 1000.", () => {
      assert.strictEqual(new P001().aop(), 233168);
    });
  });
});
