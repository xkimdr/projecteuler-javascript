class P004 {
  /**
   * Determines whether the given `num` is a palindrome.
   *
   * For example, if `num` = 121, the function returns `true`.
   *
   * @param {number} num - The number to be checked for palindromicity.
   *
   * @returns {number} `true` if `num` is a palindrome, otherwise `false`.
   */
  #isp(num) {
    const xy = num;
    let yx = 0;

    while (num != 0) {
      yx = yx * 10 + (num % 10);
      num = Math.floor(num / 10);
    }

    return xy == yx;
  }

  /**
   * Solves Problem 004 from Project Euler.
   *
   * @returns {number} The largest palindrome made from the product of two
   * 3-digit numbers.
   */
  aop() {
    let palindrome = 0;

    for (let i = 999; i >= 100; --i) {
      for (let j = 90; j >= 10; --j) {
        const product = 11 * j * i;

        if (product > palindrome && this.#isp(product)) {
          palindrome = product;
        }
      }
    }

    return palindrome;
  }
}

export default P004;
