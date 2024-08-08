import { Book } from './Book.js';
import { book2 } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Invalid file format');
        }
        this._fileFormat = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this.fileFormat}`);
    }

    static createFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

export const ebook1 = new EBook('EBook One', 'Author One', 2001, 'PDF');
ebook1.printInfo();

export const ebook2 = EBook.createFromBook(book2, 'EPUB');
ebook2.printInfo();
