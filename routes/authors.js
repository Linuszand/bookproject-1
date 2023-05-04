import Router from "express";
import mongoose, { Schema } from "mongoose";

const authorsRouter = Router();

const authorSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: Number,
  gender: String
});

export const authorModel = mongoose.model("authors", authorSchema)

authorsRouter.post("/", async (request, response) => {
  const author = new mongoose.models.authors()
  author.name = request.body.name
  author.age = request.body.age
  author.gender = request.body.gender
  if (!request.body.name) {
    return response.status(400).json({ error: "Name is required."})
  }
  const result = await author.save();
  response.json(result);
});

authorsRouter.get("/", async (request, response) => {
  let query = {}
  // search queries
  if (request.query.name) {
    query.name = new RegExp(request.query.name, 'i')
  }
  if (request.query.age) {
    query.age = request.query.age
  }
  if (request.query.gender) {
    query.gender = new RegExp(request.query.gender, 'i')
  }

  const authors = await mongoose.models.authors.find(query)
  response.json(authors);
});

authorsRouter.get("/:id", async (request, response) => {
  const author = await mongoose.models.authors.findById(request.params.id)
  response.json(author);
});
authorsRouter.delete("/:id", async (request, response) => {
  const deleteauthor = await mongoose.models.authors.findByIdAndDelete(request.params.id);
  response.json({ message: "author deleted successfully", deleted_author_name: deleteauthor.name, data: deleteauthor });
});

authorsRouter.put("/:id", async (request, response) => {
  const author = await mongoose.models.authors.findByIdAndUpdate(request.params.id, request.body, { new: true });
  response.json({ message: "Successfully updated", author })
});

export default authorsRouter;