/*
Завдання 2

Створіть функцію яка приймає один параметр: age.
Усередині функції перевірте, чи age більше або рівне 18.
Якщо age відповідає умові, поверніть true, інакше поверніть false.
Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.
*/

function isAdult(age) {
    return age >= 18;
}

const age1 = 25;
const age2 = 15;

console.log(`Is adult ${age1} y.o. person? ${isAdult(age1)}`);
console.log(`Is adult ${age2} y.o. person? ${isAdult(age2)}`);
