class P005 {
  /**
   * Calculates the greatest common divisor (GCD) of `x` and `y` using the
   * Euclidean algorithm.
   *
   * For example, if `x` = 12 and `y` = 32, the function returns 4.
   *
   * @param {number} x - A positive integer.
   * @param {number} y - A positive integer.
   *
   * @returns {number} The GCD of `x` and `y`.
   */
  #gcd(x, y) {
    let t;
    while (y != 0) {
      t = y;
      y = x % y;
      x = t;
    }

    return x;
  }

  /**
   * Solves Problem 005 from Project Euler.
   *
   * @returns {number} The smallest positive number that is evenly divisible
   * with no remainder by all of the numbers from 1 to 20.
   */
  aop() {
    let lcm = 1;
    let num = 1;

    while (num <= 20) {
      lcm = Math.floor((lcm * num) / this.#gcd(lcm, num));
      ++num;
    }

    return lcm;
  }
}

export default P005;
