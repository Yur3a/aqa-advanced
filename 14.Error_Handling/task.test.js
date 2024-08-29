// Матеріал від викладача
// Домашнє завдання:(замість дефолтного)

// Створити нову гілку
// Створити 5-10 тестів до сервісу https://bookstore.toolsqa.com/swagger/#/
// У тестах робити перевірки через expect
// Використовувати контролери у тестах

const axios = require('axios');

test('should fetch the list of books', async () => {
    const response = await axios.get('https://bookstore.toolsqa.com/BookStore/v1/Books');
    expect(response.status).toBe(200);
    expect(response.data.books).toBeInstanceOf(Array);
});

test('should fetch a book by ISBN', async () => {
    const isbn = '9781449325862';
    const response = await axios.get(`https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${isbn}`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('isbn', isbn);
});


test('should add a new book', async () => {
    const newBook = {
        userId: 'user123',
        collectionOfIsbn: [{ isbn: '9781449325862' }]
    };
    const response = await axios.post('https://bookstore.toolsqa.com/BookStore/v1/Books', newBook);
    expect(response.status).toBe(201);
    expect(response.data.books).toContainEqual(newBook.collectionOfIsbn[0]);
});


test('should update a book', async () => {
    const updatedBook = {
        userId: 'user123',
        isbn: '9781449325862'
    };
    const response = await axios.put('https://bookstore.toolsqa.com/BookStore/v1/Books', updatedBook);
    expect(response.status).toBe(200);
    expect(response.data.books).toContainEqual(updatedBook.isbn);
});


test('should delete a book', async () => {
    const isbn = '9781449325862';
    const response = await axios.delete(`https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${isbn}`);
    expect(response.status).toBe(204);
});


