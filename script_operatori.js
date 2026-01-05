// 1. Напишите код, который:
// 1. Присваивает переменной price значение 1000
// 2. Присваивает переменной discount значение 15 (проценты)
// 3. Вычисляет сумму скидки (price * discount / 100)
// 4. Вычисляет итоговую цену (price - сумма скидки)
// 5. Выводит в консоль: "Итоговая цена: X руб. (скидка Y руб.)"

let price = 1000
let discount = 15
let discountSum = (price * discount/100)
let sum = price - discountSum
// console.log(`Итоговая цена: ${sum} руб. (скидка: ${discountSum} руб.)`);

// 2. Напишите код, который проверяет:
// 1. Возраст пользователя (age) больше или равен 18
// 2. Имеется ли согласие (hasConsent) со значением true
// 3. Зарегистрирован ли пользователь (isRegistered)
// Используйте логические операторы так, чтобы доступ был разрешен
// только если ВСЕ условия верны
// Выведите результат проверки в консоль


function checkUser (){
let user = {
    age:19,
    hasConsent: true,
    isRegistered: true
}

if (user.age > 18 && user.hasConsent === true && user.isRegistered === true) {
    console.log('Доступ разрешен')}
else    {
    console.log('Доступ запрещен');
} 

}
checkUser()
