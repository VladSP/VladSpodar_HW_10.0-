function main(a = 2, b = 3, c) {
  let sumResult = sum(a, b);
   if (typeof c === 'function') {
    const cResult = c(sumResult);
    return cResult;
    }
    return sumResult;
}
function sum(a, b) {
  return a + b;
}

console.log(main());
console.log(main(5, 10));
console.log(main(4, 5, function (result) {
    return result * 2;
}));

