import P003 from "../src/prob/p003.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("P003 Class", () => {
  describe("aop Method", () => {
    it("Should return 6857 for the largest prime factor of the number 600851475143.", () => {
      assert.strictEqual(new P003().aop(), 6857);
    });
  });
});
