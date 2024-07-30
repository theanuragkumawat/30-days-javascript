// Activity 1
const book = {
    title: "A Game of Thrones",
    published: 1996,
    author: "George R. R. Martin",
    info: function(){
        // console.log(`The book name is ${this.title} and its author is ${this.author}`);
        return this.title + this.author
    },
    updateDate: function(year){
        book.published = year
        console.log(book);
    },
    titleYear: function(){
        return this.title + this.published;
    }
}

console.log(book);
console.log(book.author, book.title);

// Activity 2
console.log(book.info())
book.updateDate(1999)

// Activity 3
const library = {
    name: "myBooks",
    books: [
        {
            title: "book1",
            published: 1898,
            author: 'rrr'
        },
        {
            title: "book2",
            published: 6546,
            author: 'rrr'
        },
        {
            title: "book3",
            published: 1698,
            author: 'rrr'
        }
    ]
}
console.log(library);
console.log(library.name);
library.books.forEach(function(value){
    console.log(value.title);
})

// Activity 4
console.log(book.titleYear())

// Activity 5
for (const key in book) {
    console.log(key, book[key]);
}

console.log(Object.keys(book))
console.log(Object.values(book))
console.log(Object.entries(book));