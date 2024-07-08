// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1

// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

let radius = 4;
let circleArea = Math.PI * Math.pow(radius, 2);

console.log(`Area of circle with radius ${radius} is ${circleArea}`);


// Завдання 4.2

// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let length = 4;
let width = 2;
let rectangleArea = length * width;

console.log(`Area of rectangle with length ${length} and width ${width} is ${rectangleArea}`);


// Завдання 4.3

// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let cylinderRadius = 4;
let cylinderHeight = 8;

let volume = Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight;
let roundedVolume = volume.toFixed(2);

console.log(`Volume of cylinder with radius ${cylinderRadius} and hight ${cylinderHeight} is ${roundedVolume}`);
