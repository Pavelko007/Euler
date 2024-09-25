/*
https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers
 */

export function fiboEvenSum(n) {

    let sum = 0;
    let fn1 = 1;
    let fn2 = 0;
    let fn = fn1 + fn2;
    while (fn <= n) {
      if (fn % 2 == 0) {
        sum += fn;
      }
      fn2 = fn1;
      fn1 = fn;
  
      fn = fn1 + fn2;
    }
    return sum;
  }

  console.log(fiboEvenSum(8));
 