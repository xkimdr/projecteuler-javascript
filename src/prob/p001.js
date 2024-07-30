class P001 {
  /**
   * Calculates the sum of multiples of `num` that are less than `upto + 1`.
   *
   * For example, if `num` = 3 and `upto` = 10, the function returns the sum
   *  of 3, 6, and 9, totaling 18.
   *
   * @param {number} num - The function sums multiples of this positive
   * integer.
   * @param {number} upto - Only multiples less than or equal to this value
   * are summed.
   *
   * @returns {number} The sum of all multiples of `num` that are less than
   * or equal to `upto`.
   */
  #som(num, upto) {
    const count = Math.floor(upto / num);
    return (num * count * (count + 1)) / 2;
  }

  /**
   * Solves Problem 001 from Project Euler.
   *
   * @returns {number} The sum of all multiples of 3 or 5 below 1000.
   */
  aop() {
    return this.#som(3, 999) + this.#som(5, 999) - this.#som(15, 999);
  }
}

export default P001;
