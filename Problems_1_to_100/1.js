/*
https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-or-5
*/

function multiplesOf3and5(num) {
    const loopTo = parseInt(num / 3, 10);
    let sum = 0;
    for (let i = 1; i <= loopTo; i++) {
      const multiple5 = 5 * i;
      const multiple3 = 3 * i;
      if (multiple3 < num) {
        sum += multiple3;
      }
      if (multiple5 < num && multiple5 % 3 !== 0) {
        sum += multiple5;
      }
    }
    return sum;
  }

  console.log(multiplesOf3and5(49))