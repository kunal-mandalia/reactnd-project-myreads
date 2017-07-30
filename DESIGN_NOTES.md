Components required:
<Book
  book: object // determine structure e.g. { name: String, id: number, image: string, }
/>

<BookShelf
  title: string
  books: arrayOf(object)
/>

Dependencies required:
react-router-dom

AJAX:
getAll() returns promise. Use postman to inspect the payload to determine the shape of a book

