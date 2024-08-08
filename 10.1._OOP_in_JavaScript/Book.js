export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Invalid title');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Invalid author');
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Invalid year');
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, book) => {
            if (book.year < oldest.year) {
                return book;
            } else {
                return oldest;
            }
        });
    }
}

export const book1 = new Book('Book One', 'Author One', 1990);
export const book2 = new Book('Book Two', 'Author Two', 1995);
export const book3 = new Book('Book Three', 'Author Three', 2000);

book1.printInfo();
book2.printInfo();
book3.printInfo();
