var filter = function (arr, fn) {
  let filteredarray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredarray.push(arr[i]);
    }
  }
  return filteredarray;
};
// test case
const fn = (val, idx) => val % 2 != 0;
const fn2 = (val, idx) =>
  val % 2 === 0 && idx % 2 === 0;
// Filter values that are divisible by 5 AND at an odd index
const arr = [5, 10, 15, 20, 25, 30];
const fn3 = (val, idx) =>
  val % 5 === 0 && idx % 2 != 0;
// Filter numbers that are divisible by 3 OR appear at an index divisible by 4.
const fn4 = (val, idx) =>
  val % 3 === 0 || idx % 4 === 0;