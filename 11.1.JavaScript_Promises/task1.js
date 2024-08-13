/**
 * Завдання 1
 * Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд
 */

function printTextAfterDelay(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

printTextAfterDelay("Hello world!", 2000);