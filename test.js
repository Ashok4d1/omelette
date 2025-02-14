const booksData = [
    {
        "bookId": 101,
        "title": "JavaScript: The Good Parts",
        "author": {
            "name": "Douglas Crockford",
            "birthDate": "1947-12-15",
            "nationality": "American"
        },
        "publisher": {
            "name": "O'Reilly Media",
            "yearFounded": 1980,
            "location": "USA"
        },
        "genres": ["Programming", "Web Development", "JavaScript"],
        "reviews": [
            {
                "user": "Alice",
                "rating": 5,
                "comment": "A must-read for every JavaScript developer!",
                "date": "2021-05-10"
            },
            {
                "user": "Bob",
                "rating": 4,
                "comment": "Great book but could include more examples.",
                "date": "2021-06-15"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 30.99
        },
        "available": true,
        "languages": ["English", "Spanish"],
        "tags": ["beginner", "web dev"]
    },
    {
        "bookId": 102,
        "title": "The Pragmatic Programmer",
        "author": {
            "name": "Andrew Hunt",
            "birthDate": "1960-12-21",
            "nationality": "American"
        },
        "publisher": {
            "name": "Addison-Wesley",
            "yearFounded": 1942,
            "location": "USA"
        },
        "genres": ["Programming", "Software Development", "Tech"],
        "reviews": [
            {
                "user": "Charlie",
                "rating": 5,
                "comment": "One of the best books on software engineering.",
                "date": "2020-07-11"
            },
            {
                "user": "Dave",
                "rating": 4,
                "comment": "Useful but a bit dated in some concepts.",
                "date": "2022-01-22"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 39.99
        },
        "available": false,
        "languages": ["English"],
        "tags": ["advanced", "software engineering"]
    },
    {
        "bookId": 103,
        "title": "Clean Code",
        "author": {
            "name": "Robert C. Martin",
            "birthDate": "1952-12-05",
            "nationality": "American"
        },
        "publisher": {
            "name": "Prentice Hall",
            "yearFounded": 1913,
            "location": "USA"
        },
        "genres": ["Programming", "Software Engineering", "Best Practices"],
        "reviews": [
            {
                "user": "Eve",
                "rating": 5,
                "comment": "Transformative book on writing clean code.",
                "date": "2023-01-02"
            },
            {
                "user": "Frank",
                "rating": 4,
                "comment": "Extremely valuable, but challenging for beginners.",
                "date": "2023-01-10"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 45.50
        },
        "available": true,
        "languages": ["English", "French", "German"],
        "tags": ["advanced", "best practices"]
    }
]
/* CHALLENGE-1
const getGenre = booksData.filter(findAvailableBooks);
function findAvailableBooks(element) {
    return element.available === true;
}
listOfAvailableTitles=getGenre.map(gettitles);
function gettitles(element){
    return element.title;
}
console.log(listOfAvailableTitles);*/
/* CHALLENGE-2
let num = Number(prompt("Enter a book number:"));

let c = booksData.filter(findIt);
function findIt(element) {
    return element.bookId === num;
}
console.log(c);
if (c.length!==0){
let result = c.reduce(function (acc, book) {
    book.reviews.forEach(function (review) {
        acc.total += review.rating;
        acc.count++;
    });
    return acc;
}, { total: 0, count: 0 });

let total = result.total;
let count = result.count;
let averageRating = total / count;

console.log(averageRating);
}
else{
    console.log('null');
}*/
/* CHALLENGE-3
pubname=prompt('please enter the AUTHOR name');
let newa=booksData.filter(getBooksByPublisher);
function getBooksByPublisher(element){
    return element.author.name===pubname;
}
console.log(newa[0].title);*/

/* CHALLENGE-4
pubname=prompt('please enter the publisher name');
let newa=booksData.filter(getBooksByPublisher);
function getBooksByPublisher(element){
    return element.publisher.name===pubname;
}
console.log(newa[0].title); */
/* CHALLENGE-5
let a=[];
let given_genre= prompt("please enter the name of genre you that like")
a=booksData.filter(findinggenere);
function findinggenere(element){
 let   genre=element.genres;
    for (i=0;i<genre.length; i++){
     if (genre[i]===given_genre){
       return element;
   }
}
}
function printing_titles(element){
    return (element.title);
}
let b =a.map(printing_titles)
console.log(b);   */
/* CHALLENGE-6
given_price=prompt('please enter the price of the book ')
let a =booksData.filter(getBooksBelowPrice);
function getBooksBelowPrice(element){
   return element.price.amount<given_price;
   
}
let b=a.map(titles);
function titles(element){
    return element.title;
}
console.log(b);  */
/* CHALLENGE-7
given_number=prompt('please enter the minimum number of reviews');
a=booksData.filter(getBooksWithMoreThanReviews)
function getBooksWithMoreThanReviews(element){
    return element.reviews.length>=given_number;
}
b=a.map(gettitle);
function gettitle(element){
    return element.title;
}
console.log(b); */
/* CHALLENGE-10
let a =booksData.reduce(getMostExpensiveBook);
function getMostExpensiveBook(acc,ele){
    if (acc.price.amount<ele.price.amount){
        acc=ele;
    }
    return acc;
}
console.log(a.title); */


/* CHALLENEGE-9

let a = ["German"]
let b=booksData.filter(filtering);
function filtering(element){
    for (let i=0;i<=a.length;i++){
        for (let j=0; j<element.languages.length; j++){
        if (a[i]===element.languages[j]){
            return element;
        }
        }
    }
}
console.log(b);
c=b.map(gettitles);
function gettitles(element){
    return element.title;
}
console.log(c);
*/
