/*
Завдання 1

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
*/


// function declaration
function calculateRectangleArea(width, height) {
    return width * height;
}

const width1 = 5;
const height1 = 10;
const area1 = calculateRectangleArea(width1, height1);
console.log(`Area of the rectangle is ${area1}`);


// function expression
const calculateRectangleArea2 = function(width, height) {
    return width * height;
};

const width2 = 5;
const height2 = 10;
const area2 = calculateRectangleArea2(width2, height2);
console.log(`Area of the rectangle is ${area2}`);


// arrow function
const calculateRectangleArea3 = (width, height) => width * height;

const width3 = 5;
const height3 = 10;
const area3 = calculateRectangleArea3(width3, height3);
console.log(`Area of the rectangle is ${area3}`);

