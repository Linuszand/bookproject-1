import express from 'express'
const api = express()
api.use(express.json())
// Rate limiting to prevent abuse
import rateLimit from "express-rate-limit";
const limiter = rateLimit({
  windowMs: 60000, // 1 minute
  max: 100, // limit to 100 requests per windowMs
});
api.use(limiter);

import mongoose from 'mongoose'
const connection = "mongodb+srv://linus:eQqNJRreQJXZVAt2@bookhome.yvh0dhe.mongodb.net/test"

mongoose.connection.on("error", (err) => {
  console.error(err);
});

api.listen(3457, () => {
  console.log('Connected to http://localhost:3457')
  mongoose.connect(connection, { dbName: 'bookhome' })
})

import booksRouter from './routes/books.js'
api.use('/api/books', booksRouter)

import authorsRouter from './routes/authors.js'
api.use('/api/authors', authorsRouter)

import ownersRouter from './routes/owners.js'
api.use('/api/owners', ownersRouter)