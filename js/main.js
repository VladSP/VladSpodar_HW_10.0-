// function main (a = 2, b = 3, c) { 
//   let result = sum(a, b); // вызов функции sum с переданными аргументами a и b
//   if (typeof c === 'function') { // проверка, является ли аргумент c функцией
//     result = c(result); // вызов функции c с результатом работы функции sum
//   }
//   return result; // возвращение результата
// }

// function sum (a, b) { 
//     return a + b; 
// }
// console.log(main()); // 5, a = 2, b = 3 по умолчанию, c не передано
// console.log(main(4, 5)); // 9, a = 4, b = 5, c не передано
// console.log(main(4, 5, (result) => result * 2)); // 18, a = 4, b = 5, c - функция, выполняющая умножение результата sum на 2

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

