/**
 * Завдання 3
 * Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити
 */

async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        return console.error('Error fetching todo:', error);
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        return console.error('Error fetching user:', error);
    }
}

Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const [todo, user] = results;
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => console.error('Error in Promise.all:', error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('First completed:', result);
    })
    .catch(error => console.error('Error in Promise.race:', error));