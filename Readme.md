Qqq# Table of Contents | 0
- [Bookhome | 1](#bookhome--1)
- [Step by Step Instructions to get access to repository | 2](#step-by-step-instructions-to-get-access-to-repository--2)
- [Use MongoDB Atlas to be able to use this API](#use-mongodb-atlas-to-be-able-to-use-this-api)
- [API and test documentation | 3](#api-and-test-documentation--3)
  - [API documentation | 3.1](#api-documentation--31)
  - [Manual and Automatic tests documentation | 3.2](#manual-and-automatic-tests-documentation--32)
- [How to use the bookhome API | 4](#how-to-use-the-bookhome-api--4)

# Bookhome | 1
Welcome to the Bookhome API!

API that searches after books from criterias such as title, genre, authors, rating and date of release together with information about the books, their authors, description and owners. It also has search criteria for the authors and owners! Deep dive into the Bookhome API!

Open workspace on postman.com: https://www.postman.com/aviation-engineer-97338859/workspace/bookproject/overview

MongoDB: https://cloud.mongodb.com/v2/643e7c8cd43f8e267b6d6284#/clusters

Check below to see instructions for how to be able to run this API!

You need a git clone and to make a new project on MongoDB Atlas!

# Step by Step Instructions to get access to repository | 2
1. Go to the respository page on GitHub(https://github.com/Linuszand/bookproject-1).
2. Click the "Code" button.
3. Copy the HTTPS url(https://github.com/Linuszand/bookproject-1.git).
4. Have a folder ready where you can copy the respository into.
5. Write `git clone https://github.com/Linuszand/bookproject-1.git` in the Git Bash terminal.
6. Press enter to clone the respository.
7. Make sure you enter into the correct the directory before you run api.js(cd bookproject-1)

# Use MongoDB Atlas to be able to use this API
1. Go to MongoDB Atlas and sign in(https://www.mongodb.com/atlas/)
2. Make a new project once you're logged in and create a MongoDB Atlas cluster(Choose the free options M0 when deploying the database!).
3. After you're done with that, go to "Database access" under the "Security" tab and create a new user with username and password 
4. Then go to "Network access" and Add your IP address to the whitelist to able to connect to the database.
5. After that you need to get the connection string by clicking on connect.
6. Replace my URI in the api.js`("mongodb+srv://linus:eQqNJRreQJXZVAt2@bookhome.yvh0dhe.mongodb.net/test")` with your URI.
7. Last but not least replace the `mongoose.connect(connection, { dbName: 'bookhome' })` with your cluster name

```
const connection = "mongodb+srv://linus:eQqNJRreQJXZVAt2@bookhome.yvh0dhe.mongodb.net/test"
mongoose.connect(connection, { dbName: 'bookhome' })
```

# API and test documentation | 3
## API documentation | 3.1
Go to my APIdocumentation to get more information about what endpoints and search criterias there are.
## Manual and Automatic tests documentation | 3.2
Go to my ManualandAutomatictestdocumentation to get more information about the tests that I have for this API.

# How to use the bookhome API | 4
1. Write npm install in the Git Bash terminal.
3. Write node api.js/nodemon api.js in the Git Bash terminal.
2. Open the Postman application and create a new collection.
3. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
4. Look at the API documentation to see what endpoints there are and what requests and search queries you can do.
