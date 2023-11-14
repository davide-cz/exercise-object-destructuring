const JsonBooks = `
[
  {
      "title": "Il Grande Gatsby",
      "author": {
          "firstName": "F. Scott",
          "lastName": "Fitzgerald"
      },
      "details": {
          "pages": 180,
          "language": "Inglese"
      }
  },
  {
      "title": "Guerra e Pace",
      "author": {
          "firstName": "Lev",
          "lastName": "Tolstoj"
      },
      "details": {
          "pages": 1225,
          "language": "Russo"
      }
  },
  {
      "title": "1984",
      "author": {
          "firstName": "George",
          "lastName": "Orwell"
      },
      "details": {
          "pages": 328,
          "language": "Inglese"
      }
  }
]`;
// registrare le seguenti informazioni per ogni libro:
const books = JSON.parse(JsonBooks);

console.log(books);
const [book0, book1, book2] = books;
const [{ title: title0 }, { title: title1 }, { title: title2 }] = books;

const [{ author: author0 }, { author: author1 }, { author: author2 }] = books;

const [
  {
    details: { pages: numbOfPages0 },
  },
  {
    details: { pages: numbOfPages1 },
  },
  {
    details: { pages: numbOfPages2 },
  },
] = books;
console.log(numbOfPages0, numbOfPages1, numbOfPages2);
booksdetails.delete(language);
//titolo, nome e cognome dell'autore,
// e il numero di pagine se il libro ne ha più di 300.
