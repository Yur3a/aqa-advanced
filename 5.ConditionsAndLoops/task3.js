/*
Завдання 3: Генерація таблиці множення

Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

Виберіть число для якого потрібно згенерувати таблицю множення.
Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.
*/


const number = 5;

console.log(`Multiplication table via for:`);
for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} X ${i} = ${result}`);
}

console.log(`Multiplication table via for while):`);
let j = 1;
while (j <= 10) {
    const result = j * number;
    console.log(`${number} X ${j} = ${result}`);
    j++;
}

