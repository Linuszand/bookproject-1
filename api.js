import express from 'express'
const api = express()
api.use(express.json())


import mongoose from 'mongoose'
const connection = "mongodb+srv://linus:eQqNJRreQJXZVAt2@bookhome.yvh0dhe.mongodb.net/test"

mongoose.connection.on("error", (err) => {
  console.error(err);
});

api.listen(3457, () => {
  console.log('Connected to http://localhost:3457')
  mongoose.connect(connection, { dbName: 'clusterproject' })
})