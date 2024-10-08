/**
 * Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.
 *   1. Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
 *   2.Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
 *   3. Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
 *   4. Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
 *   5. Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
 */

// 1. Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// 2.Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// 3. Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// 4. Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
for (const number of numbers) {
    if (number > 0) {
        positiveCount++;
    }
    if (number < 0) {
        negativeCount++;
    }
    if (number === 0) {
        zeroCount++;
    }
}


// 5. Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
console.log(
    `Кількість позитивних чисел: ${positiveCount}
Кількість негативних чисел: ${negativeCount}
Кількість нульових чисел: ${zeroCount}`
)

