/**
 * 1. Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
 * 2. Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
 * 3. Зробіть деструктуризацію в циклі
 */

const users = [
    { name: "Mr. Black", email: "black@example.com", age: 21 },
    { name: "Mr. White", email: "white@example.com", age: 22 },
    { name: "Mr. Green", email: "green@example.com", age: 23 }
];

for (const user of users) {
    const { name, email, age } = user;
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}