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
  bookOwner: [{ type: mongoose.Schema.Types.ObjectId, ref: "owners" }]
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
  let query = {}

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

  if (request.query.authors) {
    const authorNames = request.query.authors.split(',').map(name => name.trim())
    const authors = await mongoose.models.authors.find({ name: { $in: authorNames } }).select('_id')
    const authorIds = authors.map(author => author._id)
    query.authors = { $in: authorIds }
  }
  
  const books = await mongoose.models.books.find(query).limit().populate("authors", "name").populate("bookOwner", "name")
  const formattedBooks = books.map(book => ({
  ...book.toObject(), releaseDate: new Date(book.releaseDate).toISOString().substring(0, 10)
  }))
  response.json(formattedBooks)
})

booksRouter.get("/:id", async (request, response) => {
  const book = await mongoose.models.books.findById(request.params.id).populate("authors")
  response.json(book);
})

booksRouter.delete("/:id", async (request, response) => {
  const deletebook = await mongoose.models.books.findByIdAndDelete(request.params.id)
  response.json({ message: "book deleted successfully", deleted_book_name: deletebook.name, data: deletebook })
})

booksRouter.put("/:id", async (request, response) => {
  const book = await mongoose.models.books.findByIdAndUpdate(request.params.id, request.body, { new: true })
  response.json({ message: "Successfully updated", book })
})

export default booksRouter

