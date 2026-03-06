// Library Management System using class
class Book
{
    title;
    author;
    pages;
    isAvailable;
    
    //constructor
    constructor(title,author,pages)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = true;
    }

    //methods
    borrow()
    {
        if(this.isAvailable)
        {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed`);
        }
        else
        {
            console.log(`${this.title} is not available`);
        }
    }

    returnBook()
    {
        this.isAvailable = true;
        console.log(`${this.title} is available`);
    }

    getInfo()
    {
        return `${this.title} by ${this.author} - (${this.pages} pages)`;
    }

    isLongBook()
    {
        if(this.pages>300) return true;
        else return false;
    }
}

let book1 = new Book("Harry Potter","J.K. Rowling",310);
let book2 = new Book("The Hobbit","J.R.R. Tolkien",290);

console.log(book1.getInfo());
console.log('======================')
console.log(book2.getInfo());
console.log('======================')
book1.borrow();
book1.borrow();
book1.returnBook();

console.log(book2.isLongBook())
console.log(book1.isLongBook())


