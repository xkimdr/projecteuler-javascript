class P003 {
  /**
   * Returns the smallest factor of `num` using an iterative approach.
   *
   * For example, if `num` = 21, the function returns 7.
   *
   * @param {number} num - The smallest factor of this number is computed.
   *
   * @returns {number} The smallest factor of `num`.
   */
  #sf(num) {
    let i = 2;

    while (num % i != 0) {
      ++i;
    }

    return i;
  }

  /**
   * Solves Problem 003 from Project Euler.
   *
   * @returns {number} The largest prime factor of the number 600851475143.
   */
  aop() {
    let num = 600_851_475_143;
    let prime = this.#sf(num);

    while (num != 1) {
      prime = this.#sf(num);
      num /= prime;
    }

    return prime;
  }
}

export default P003;
