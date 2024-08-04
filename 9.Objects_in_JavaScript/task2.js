/**
 * 1. Створіть об'єкт book з такими властивостями:
 *   title: рядок, представляє назву книги.
 *   author: рядок, представляє автора книги.
 *   year: число, представляє рік видання книги.
 * 2. Деструктуризуйте назву та автора книги з об'єкта book.
 * 3. Виведіть деструктуризовані змінні в консоль 
 */


const book = {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965
}

const { title, author } = book;

console.log(`
    Title: ${title}
    Author: ${author}
`);

