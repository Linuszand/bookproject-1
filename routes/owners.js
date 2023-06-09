import Router from "express";
import mongoose, { Schema } from "mongoose";

const ownersRouter = Router();

const ownerSchema = new Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
  address: { type: String, required: true, unique: true }
});


export const ownerModel = mongoose.model("owners", ownerSchema);

ownersRouter.post("/", async (request, response) => {
  const owner = new mongoose.models.owners();
  owner.name = request.body.name;
  owner.age = request.body.age;
  owner.email = request.body.email;
  owner.address = request.body.address
  if (!request.body.email || !request.body.address) {
    return response.status(400).json({ error: "E-mail and Address are required."})
  }
  const result = await owner.save();
  response.json(result);
});

ownersRouter.get("/", async (request, response) => {
  let query = {}
  // search queries
  if (request.query.name) {
    query.name = new RegExp(request.query.name, 'i')
  }
  
  if (request.query.email) {
    query.email = new RegExp(request.query.email, 'i')
  }
  if (request.query.address) {
    query.address = new RegExp(request.query.address, 'i')
  }
  if (request.query.age) {
    query.age = request.query.age
  }
  const owners = await mongoose.models.owners.find(query)
  response.json(owners);
});

ownersRouter.get("/:id", async (request, response) => {
  const owner = await mongoose.models.owners.findById(request.params.id)
  response.json(owner);
});

ownersRouter.delete("/:id", async (request, response) => {
  const deleteowner = await mongoose.models.owners.findByIdAndDelete(request.params.id)
  response.json({ message: "owner deleted successfully", deleted_owner_name: deleteowner.name, data: deleteowner })
});

ownersRouter.put("/:id", async (request, response) => {
  const owner = await mongoose.models.owners.findByIdAndUpdate(request.params.id, request.body, { new: true })
  response.json({ message: "Successfully updated", owner })
});

export default ownersRouter;