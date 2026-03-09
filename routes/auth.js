const express = require("express");
const books = require("../booksdb");

const router = express.Router();

// Task 8: Add or Modify Review
router.put("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const review = req.body.review;

  books[isbn].reviews["user"] = review;

  res.send("Review added/modified successfully");
});

// Task 9: Delete Review
router.delete("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  delete books[isbn].reviews["user"];

  res.send("Review deleted successfully");
});

module.exports = router;