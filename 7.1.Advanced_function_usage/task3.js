/**
 * 1. Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
 * 2. У функції треба поділити numerator на denominator і повернути результат.
 * 3. Додайте валідацію в функції. У разі,
 *   a. якщо denominator дорівнює 0
 *   b. або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
 * 4. Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
 * 5. Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
 */

function divide(numerator, denominator) {

    if (denominator === 0) {
        throw new Error('Denominator cannot be zero.');
    }

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }


    return numerator / denominator;
}


try {
    const result1 = divide(10, 2);
    console.log('Result 1:', result1);

    // const result2 = divide(7, 0);
    // console.log('Result 2:', result2);

    const result3 = divide(true, null);
    console.log('Result 3:', result3);
} catch (error) {
    console.error('Error:', error.message);
} finally {
    console.log('Робота завершена');
}