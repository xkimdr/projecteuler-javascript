class P002 {
  /**
   * Solves Problem 002 from Project Euler.
   *
   * @returns {number} The sum of the even-valued terms of Fibonacci sequence
   * whose values do not exceed 4 million.
   */
  aop() {
    let previous = 2;
    let current = 8;
    let next = previous + 4 * current;
    let sum = previous + current;

    while (next <= 4_000_000) {
      sum += next;
      previous = current;
      current = next;
      next = previous + 4 * current;
    }

    return sum;
  }
}

export default P002;
