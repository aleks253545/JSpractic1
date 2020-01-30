const mas = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
function maxSum(array) {
  let result = 0; let prevElement; let sum;
  array.forEach((element, index) => {
    if (index === 0) {
      prevElement = element;
      sum = prevElement;
    } else if (element === prevElement + 1) {
      sum += element;
      prevElement = element;
    } else {
      prevElement = element;
      sum = element;
    }
    if (maxSum < sum) {
      result = sum;
    }
  });
  return result;
}

console.log(maxSum(mas));
