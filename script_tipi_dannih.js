//1. Напишите функцию checkType, которая принимает значение и возвращает его тип в виде строки. Учтите особенность null.

function checkType(value) {
   typeof(value)
   return typeof value
}

// console.log(checkType("Привет")); // "string"
// console.log(checkType(123));      // "number"
// console.log(checkType(null));     // "null"
// console.log(checkType(undefined));// "undefined"
// console.log(checkType([1,2,3]));  // "object" (массив)

//2. Создайте функцию sumFromStrings, которая принимает два значения, приводит их к числам и возвращает сумму. 
// Если преобразование невозможно, верните NaN.

function sumFromStrings(a, b) {
let sum = parseFloat(a) + parseFloat(b)
return sum
}

// console.log(sumFromStrings("10", "20")); // 30
// console.log(sumFromStrings("10px", "20")); // NaN
// console.log(sumFromStrings("10.5", 5.5)); // 16

//3. Создайте функцию sumFromStrings, которая принимает два значения, приводит их к числам и возвращает сумму. 
// Если преобразование невозможно, верните NaN.


function sumFromStrings(a, b) {
let sum = Number(a) + Number(b)
return sum
}

// console.log(sumFromStrings("10", "20")); // 30
// console.log(sumFromStrings("10px", "20")); // NaN
// console.log(sumFromStrings("10.5", 5.5)); // 16

