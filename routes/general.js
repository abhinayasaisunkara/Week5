const express = require("express");
const books = require("../booksdb");

const router = express.Router();

let users = [];

// Task 1: Get all books
router.get("/", (req, res) => {
  res.send(books);
});

// Task 2: Get book by ISBN
router.get("/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  res.send(books[isbn]);
});

// Task 3: Get books by Author
router.get("/author/:author", (req, res) => {
  const author = req.params.author;
  const result = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author.toLowerCase()
  );
  res.send(result);
});

// Task 4: Get books by Title
router.get("/title/:title", (req, res) => {
  const title = req.params.title;
  const result = Object.values(books).filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );
  res.send(result);
});

// Task 5: Get book review
router.get("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  res.send(books[isbn].reviews);
});

// Task 6: Register user
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  users.push({ username, password });

  res.send("User registered successfully");
});

// Task 7: Login user
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.send("Login successful");
  } else {
    res.send("Invalid credentials");
  }
});

module.exports = router;