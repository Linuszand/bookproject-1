import Router from "express";
import mongoose, { Schema } from "mongoose";

const authorsRouter = Router();

const authorSchema = new Schema({
  name: { type: String, required: true, unique: true },
  age: String,
  gender: String
});


export const authorModel = mongoose.model("authors", authorSchema);

authorsRouter.post("/", async (request, response) => {
  const author = new mongoose.models.authors();
  author.name = request.body.name;
  author.age = request.body.age;
  author.gender = request.body.gender;

  const result = await author.save();
  response.json(result);
});

authorsRouter.get("/", async (request, response) => {
  const authors = await mongoose.models.authors.find()
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
  response.json({ message: "Successfully updated", author });
});

export default authorsRouter;