/**
 * 1. Створіть об'єкт car1 з такими властивостями:
 *   brand: рядок, представляє марку автомобіля.
 *   model: рядок, представляє модель автомобіля.
 *   year: число, представляє рік випуску автомобіля.
 * 2. Створіть об'єкт car2 з такими властивостями:
 *   brand: рядок, представляє марку автомобіля.
 *   model: рядок, представляє модель автомобіля.
 *   owner: число, представляє рік випуску автомобіля.
 * 3. Створіть об'єкт car3. Використайте оператор spread щоб додати всі властивості що є в car1 та car2 до об’єкту car3.
 * 4. Виведіть об'єкт car3 в консоль.
 */


const car1 = {
    brand: "Mazda",
    model: "CX-5",
    year: 2024
}

const car2 = {
    brand: "Mazda",
    model: "6",
    owner: "Yurii Zatochnyi"
}

const car3 = { ...car1, ...car2 };

console.log(car3);