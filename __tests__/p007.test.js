import P007 from "../src/prob/p007.js";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("P007 Class", () => {
  describe("aop Method", () => {
    it("Should return 104743 for the 10,001st prime number.", () => {
      assert.strictEqual(new P007().aop(), 104743);
    });
  });
});
