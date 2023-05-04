import { faker } from '@faker-js/faker';

import mongoose from 'mongoose'

const connection = "mongodb+srv://linus:eQqNJRreQJXZVAt2@bookhome.yvh0dhe.mongodb.net/test"

let books = []
let authors = []
let owners = []
let genreList = ['Fantasy', 'Comedy', 'Action', 'Drama', 'Sci-fi', 'Horror', 'Documentary', 'Romance', 'Thriller', 'History', 'Western']

async function run() {
  mongoose.connect(connection, { dbName: 'bookhome' })

  await authorsData(false)
  await ownersData(false)
  await booksData(false)

  process.exit()
}
run()

import { bookModel } from './routes/books.js'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function booksData(mode = true) {
  if (!mode) {
    return books = await bookModel.find()
  }

  await bookModel.deleteMany();

  // Generate books for each author
  let fakerGenreRandomInt = faker.datatype.number({ min: 0, max: 10 })
  for (const author of authors) {
    const bookNumber = getRandomInt(3, 4)
    for (let i = 0; i < bookNumber; i++) {
      const book = new bookModel();
      // generates 1-3 words randomly from faker.lorem.words and then turns the first letter in the title to uppercase + rest of the words(titleWords.slice(1))
      const bookTitle = Math.round(Math.random() * 3) + 1
      const titleWords = faker.lorem.words(bookTitle)
      const title = titleWords.charAt(0).toUpperCase() + titleWords.slice(1)
      book.title = title;
      // Assigns a book to the author id
      book.authors = [author._id];
      console.log(author._id)

      book.genre = genreList[fakerGenreRandomInt]
      book.rating = faker.datatype.number({ min: 1, max: 5 })
      book.releaseDate = faker.date.past(80);
      book.description = faker.lorem.paragraph()

      try {
        const result = await book.save()
        books.push(result)
        console.log(books)
      } catch (e) {
        console.error(e)
      }
    }
  }

  // Assign one book to each owner
  for (const owner of owners) {
    const bookIndex = getRandomInt(0, books.length - 1);
    const book = books[bookIndex];
    book.bookOwner = owner._id;
    try {
      await bookModel.updateOne({ _id: book._id }, { $set: { bookOwner: owner._id } });
    } catch (e) {
      console.error(e);
    }
  }
}

import { authorModel } from './routes/authors.js'

async function authorsData(mode = true) {
  if (!mode) {
    return authors = await authorModel.find()
  }

  await authorModel.deleteMany()

  for (let i = 1; i < 100; i++) {
    const author = new authorModel()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    author.name = firstName + ' ' + lastName
    author.age = faker.datatype.number({ min: 17, max: 100 })
    author.gender = faker.name.sex()
    try {
      const result = await author.save()
      authors.push(result)
    } catch (e) {
      console.error(e)
    }

  }
}

import { ownerModel } from './routes/owners.js'

async function ownersData(mode = true) {
  if (!mode) {
    return owners = await ownerModel.find()
  }

  await ownerModel.deleteMany()

  for (let i = 0; i < 100; i++) {
    const owner = new ownerModel()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    owner.name = firstName + ' ' + lastName
    owner.age = faker.datatype.number({ min: 20, max: 80 })
    owner.email = faker.internet.email()
    owner.address = faker.address.street() + ' ' + faker.datatype.number({ min: 1, max: 100 })
    try {
      const result = await owner.save()
      owners.push(result)
      console.log(owners)
    } catch (e) {
      console.error(e)
    }
  }
}
