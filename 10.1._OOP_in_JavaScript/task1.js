import { Book } from './Book.js';
import { book1 } from './Book.js';
import { book2 } from './Book.js';
import { book3 } from './Book.js';
import { ebook1 } from './EBook.js';
import { ebook2 } from './EBook.js';


const books = [book1, book2, book3, ebook1, ebook2];
const oldestBook = Book.findOldestBook(books);
console.log('Oldest Book:');
oldestBook.printInfo();
