import Router from "express"
import mongoose, { Schema } from "mongoose"

const booksRouter = Router()

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  genre: String,
  rating: Number,
  releaseDate: Date,
  description: String,
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "authors" }],
  bookOwner: { type: mongoose.Schema.Types.ObjectId, ref: "owners" }
});


export const bookModel = mongoose.model("books", bookSchema);

booksRouter.post("/", async (request, response) => {
  const book = new mongoose.models.books()
  book.title = request.body.title
  book.authors = request.body.authors
  book.genre = request.body.genre
  book.rating = request.body.rating
  book.releaseDate = request.body.releaseDate
  book.description = request.body.description
  book.bookOwner = request.body.bookOwner
  const result = await book.save()
  response.json(result)
});



booksRouter.get("/", async (request, response) => {
  // To test database connection automated test
  if (request.query.simulateError === "true") {
    return response.status(500).json({ error: "Could not connect to database" });
  }

  let query = {}
  // limit and offset search parameters
  const limit = parseInt(request.query.limit) || 10
  const offset = parseInt(request.query.offset) - 1|| 0
    // title, genre, rating and releaseDate search parameters
    if (request.query.title) {
      query.title = new RegExp(request.query.title, 'i')
    }
    if (request.query.genre) {
      query.genre = new RegExp(request.query.genre, 'i')
    }
    if (request.query.rating) {
      query.rating = request.query.rating
    }
    if (request.query.releaseDate) {
      const releaseDate = new Date(request.query.releaseDate);
      const yearStart = new Date(`${releaseDate.getFullYear()}-01-01`);
      const yearEnd = new Date(`${releaseDate.getFullYear()}-12-31`);

      query.releaseDate = {
        $gte: yearStart,
        $lte: yearEnd
      };
    }
    // authors search parameter
    if (request.query.authors) {
      const authorNames = request.query.authors.split(',').map(name => name.trim())
      const authors = await mongoose.models.authors.find({ name: { $in: authorNames } }).select('_id')
      const authorIds = authors.map(author => author._id)
      query.authors = { $in: authorIds }
    }
    // Converts releaseDate into a string and then shortens it to 10 letters to make it look better in postman.
    const books = await mongoose.models.books.find(query).limit(limit).skip(offset).populate("authors", "name").populate("bookOwner", "name")
    const formattedBooks = books.map(book => ({
      ...book.toObject(), releaseDate: new Date(book.releaseDate).toISOString().substring(0, 10)
    }))
    // Paginated results added to the API
    const totalCount = await mongoose.models.books.countDocuments(query);
    const totalPages = Math.round(totalCount / limit);
    const currentPage = Math.round(offset / limit) + 1;
    // Paginated results headers
    response.header('Total-Pages', totalPages);
    response.header('Current-Page', currentPage);

    response.json(formattedBooks)
  
})

booksRouter.get("/:id", async (request, response) => {
  // try catch code to catch an error if a book has been deleted
  try {
    const book = await mongoose.models.books.findById(request.params.id).populate("authors", "name").populate("bookOwner", "name")

    if (!book) {
      return response.status(404).json({ error: "Book not found" })
    }

    response.json(book)
  } catch (error) {
    response.status(400).json({ error: "Invalid ID" })
  }
})


booksRouter.delete("/:id", async (request, response) => {
  const deletebook = await mongoose.models.books.findByIdAndDelete(request.params.id)
  response.json({ message: "book deleted successfully", deleted_book_name: deletebook.name, data: deletebook })
})

booksRouter.put("/:id", async (request, response) => {
  const updatebook = await mongoose.models.books.findByIdAndUpdate(request.params.id, request.body, { new: true })
  response.json({ message: "Successfully updated", updatebook })
})

export default booksRouter