// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

let person1 = "mr. Black";
let person2 = "mr. White";

let greetingConcatenated = "Hello, " + person1 + " and " + person2 + "!";
let greetingTemplate = `Hello, ${person1} and ${person2}!`;

console.log(greetingConcatenated);
console.log(greetingTemplate);
