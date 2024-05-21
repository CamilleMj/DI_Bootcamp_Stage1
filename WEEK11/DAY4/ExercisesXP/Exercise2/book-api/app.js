const express = require('express')
const server = express()

const books = [
    { id: 1, title: "X", author:"James", publishedYear: "1992" },
    { id: 2, title: "Y", author:"Wilson", publishedYear: "2003" },
    { id: 3, title: "Z", author:"Dave", publishedYear: "1832" },
];

app.listen(5000, () => {
    console.log("server is running on port 5000");
});

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
    const id = Number(req.params.productID);
    const book = books.find((book) => book.id === id);
  
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.use(express.json());

app.post("/api/books", (req, res) => {
  const newbook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.price,
    publishdYear: req.body.publishedYear,
  };
  books.push(newProduct);
  res.status(201).json(newProduct);
});
