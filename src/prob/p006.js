class P006 {
  /**
   * Solves Problem 006 from Project Euler.
   *
   * @returns {number} The difference between the sum of the squares of the
   * first one hundred natural numbers and the square of the sum.
   */
  aop() {
    const num = 100;
    return Math.floor(((num - 1) * num * (num + 1) * (3 * num + 2)) / 12);
  }
}

export default P006;
