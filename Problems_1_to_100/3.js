/*
https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-3-largest-prime-factor
*/

function largestPrimeFactor(number) {
  // Inline prime_factors logic
  let n = number;
  let factors = [];
  let d = 2;
  while (n > 1) {
    while (n % d == 0) {
      factors.push(d);
      n /= d;
    }
    d++;
    if (d * d > n) {
      if (n > 1) {
        factors.push(n);
      }
      break;
    }
  }
  return Math.max(...factors);
}

console.assert(
  largestPrimeFactor(13195) === 29,
  "Test failed: largestPrimeFactor(13195) should be 29"
);
