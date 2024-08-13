/**
 * Завдання 4 (Опціонально)
 * 
 * Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.
 */


class TodoFetcher {
    async fetchTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    }
}

class UserFetcher {
    async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const user = await response.json();
            return user;
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
}

const todoFetcher = new TodoFetcher();
const userFetcher = new UserFetcher();

async function fetchAll() {
    try {
        const [todo, user] = await Promise.all([todoFetcher.fetchTodo(), userFetcher.fetchUser()]);
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}

async function fetchRace() {
    try {
        const result = await Promise.race([todoFetcher.fetchTodo(), userFetcher.fetchUser()]);
        console.log('First completed:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

fetchAll();
fetchRace();