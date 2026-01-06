//1.Напишите функцию, которая возвращает сумму всех элементов массива.
function sumArray(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
 }

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([-1, 0, 1])); // 0

// 2. Напишите функцию, которая находит максимальный элемент в массиве чисел.
function findMax(arr) {
 return Math.max(...arr)
}

function findMax(arr) {
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) max = arr[i]
}
return max
}

// console.log(findMax([3, 7, 2, 9, 1])); // 9
// console.log(findMax([-5, -10, -2])); // -2

// 3.Создайте функцию, которая возвращает новый массив, содержащий только четные числа.
//мой вариант с ошибкой
// function filterEven(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i]/2) 
//         return arr[i]
//   }
// }

function filterEven(arr) {
    const result = []
    for (const num of arr) {
        if (num % 2 === 0 ) {
           result.push(num)
        }
    }
    return result
}

// 4. Напишите функцию, которая подсчитывает количество свойств в объекте.
//мой вариант с ошибкой
// function countProperties(obj) {
//  let sum = sum + Object.values(obj)
//  return sum
// }
function countProperties(obj) {
    return Object.values(obj).length
}

// console.log(countProperties({a: 1, b: 2, c: 3})); // 3
// console.log(countProperties({})); // 0

// 5.Создайте функцию, которая объединяет два объекта (второй перезаписывает свойства первого при совпадении ключей).
//не могу сделать сама
function mergeObjects(obj1, obj2) {
  return {...obj1, ...obj2}
}

const objA = {a: 1, b: 2};
const objB = {b: 3, c: 4};
// console.log(mergeObjects(objA, objB)); // {a: 1, b: 3, c: 4}

// 6.Дан массив объектов пользователей. Найдите пользователя по имени.
//мой вариант с ошибкой
// function findUserByName(users, name) {
// Object.entries(name)
// }

function findUserByName(users,name) {
for (i = 0; i < users.length; i++) {
    if (users[i].name === name) 
        return users[i]
}
}
const users = [
  {id: 1, name: 'John', age: 25},
  {id: 2, name: 'Alice', age: 30},
  {id: 3, name: 'Bob', age: 35}
];

console.log(findUserByName(users, 'Alice')); // {id: 2, name: 'Alice', age: 30}
console.log(findUserByName(users, 'Charlie')); // null
7.