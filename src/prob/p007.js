class P007 {
  /**
   * Checks whether the given `num` is a prime number.
   *
   * For example, if `num` = 3, the function returns `true`.
   *
   * @param {number} num - The number to be checked for primality.
   *
   * @returns {number} `true` if `num` is a prime number, otherwise `false`.
   */
  #isp(num) {
    switch (num) {
      case 1:
        return false;
      case 2:
      case 3:
        return true;
      default:
        let i = 2;

        while (i * i <= num) {
          if (num % i == 0) {
            return false;
          }

          ++i;
        }

        return true;
    }
  }

  /**
   * Solves Problem 007 from Project Euler.
   *
   * @returns {number} The 10,001st prime number.
   */
  aop() {
    let count = 0;
    let i = 2;

    while (count < 10_001) {
      if (this.#isp(i)) {
        ++count;
      }

      ++i;
    }

    return --i;
  }
}

export default P007;
