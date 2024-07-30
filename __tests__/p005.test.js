import P005 from "../src/prob/p005.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("P005 Class", () => {
  describe("aop Method", () => {
    it("Should return 232792560 for the smallest positive number that is evenly divisible with no remainder by all of the numbers from 1 to 20.", () => {
      assert.strictEqual(new P005().aop(), 232792560);
    });
  });
});
