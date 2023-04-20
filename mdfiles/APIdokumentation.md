- [API Documentation | 1](#api-documentation--1)
- [Endpoints and HTTP Methods | 2](#endpoints-and-http-methods--2)
  - [/books | 2.1](#books--21)
    - [GET](#get)
    - [POST](#post)
  - [/books/:id | 2.2](#booksid--22)
    - [GET](#get-1)
    - [DELETE](#delete)
    - [PUT](#put)
  - [/books/authors | 2.3](#booksauthors--23)
    - [GET](#get-2)
    - [POST](#post-1)
  - [/books/authors/:id | 2.4](#booksauthorsid--24)
    - [GET](#get-3)
    - [DELETE](#delete-1)
    - [PUT](#put-1)
  - [/books/owners | 2.5](#booksowners--25)
    - [GET](#get-4)
    - [POST](#post-2)
  - [/books/owners/:id 2.6](#booksownersid-26)
    - [GET](#get-5)
    - [DELETE](#delete-2)
    - [PUT](#put-2)

# API Documentation | 1
The bookhome API provides a RESTful interface for books, authors and owners

# Endpoints and HTTP Methods | 2
## /books | 2.1
### GET
Retrieves a list of all books.

Response:
```json
[
    {
        "_id": "644129d475e983071dea2e0a",
        "authors": [
            {
                "_id": "643f1a41176e03c50b34dfd2",
                "name": "Daija Cruickshank"
            }
        ],
        "bookOwner": [],
        "title": "Dolores",
        "genre": "Drama",
        "rating": 5,
        "releaseDate": "2022-06-16",
        "description": "Sed libero velit praesentium. Incidunt quasi quo odit. Ut quibusdam et.",
        "__v": 0
    },
    and it continues...
]

```

### POST
Add a book to the list of books.

Request:
```json
{
   "title": "Deadly Gun",
   "rating": 5,
   "releaseDate": "1999-03-01",
   "rating": 3
   "description": "Patrick Bateman's day to day life as a psycho in America.",
   "authors": [{"_id": "643f1a41176e03c50b34dfdb"}],
   "owners": [{"_id": "643f1a43176e03c50b34e0a2"}]
}
```
Response:
```json
{
    "authors": [
        "643f1a41176e03c50b34dfdb"
    ],
    "_id": "644135c108d69e11c6881ef0",
    "title": "Deadly Gun",
    "rating": 5,
    "releaseDate": "1999-03-01T00:00:00.000Z",
    "description": "Patrick Bateman's day to day life as a psycho in America.",
    "__v": 0
}
```




## /books/:id | 2.2
### GET
Retrieves one book based on it's ID.

Response:
```json
{
    "_id": "644129d475e983071dea2e0a",
    "authors": [
        {
            "_id": "643f1a41176e03c50b34dfd2",
            "name": "Daija Cruickshank",
            "age": "22",
            "gender": "female",
            "__v": 0
        }
    ],
    "bookOwner": [],
    "title": "Dolores",
    "genre": "Drama",
    "rating": 5,
    "releaseDate": "2022-06-16T03:37:39.500Z",
    "description": "Sed libero velit praesentium. Incidunt quasi quo odit. Ut quibusdam et.",
    "__v": 0
}
```
### DELETE
Deletes a book based on it's ID.

Response:
```json
{
    "message": "book deleted successfully",
    "data": {
        "_id": "644129d475e983071dea2e0a",
        "authors": [
            "643f1a41176e03c50b34dfd2"
        ],
        "bookOwner": [],
        "title": "Dolores",
        "genre": "Drama",
        "rating": 5,
        "releaseDate": "2022-06-16T03:37:39.500Z",
        "description": "Sed libero velit praesentium. Incidunt quasi quo odit. Ut quibusdam et.",
        "__v": 0
    }
}
```
### PUT
Updates one book based on it's ID.

Request:
```json
{
    "bookOwner": [{"_id": "643ebed1e371d74236c0f1a4" }],
    "genre": "Drama"
}
```
Response:
```json
{
    "message": "Successfully updated",
    "book": {
        "_id": "644129d475e983071dea2e0d",
        "authors": [
            "643f1a41176e03c50b34dfd2"
        ],
        "bookOwner": [
            "643f1a43176e03c50b34e0a0"
        ],
        "title": "Nesciunt quasi",
        "genre": "Weird Shit",
        "rating": 3,
        "releaseDate": "2022-07-20T23:49:10.893Z",
        "description": "Non provident velit perspiciatis accusamus excepturi. Dicta rerum maiores. Fugiat consequuntur libero blanditiis. Architecto hic architecto iure cumque. Eos cum laudantium nam harum ab illo temporibus possimus.",
        "__v": 0
    }
}
```
## /books/authors | 2.3
### GET
Retrieves a list of all book-authors.

Response: 
```json
[
    {
        "_id": "643f1a41176e03c50b34dfd2",
        "name": "Daija Cruickshank",
        "age": "22",
        "gender": "female",
        "__v": 0
    },
    and it continues...
]
```

### POST
Adds one author to the list of authors.

Request:
```json
{
        "name": "Daija Cruickshak",
        "age": "7",
        "gender": "female"  
}
```
Response:
```json
{
    "_id": "644155c765de57d22e75712f",
    "name": "Daija Cruickshak",
    "age": "7",
    "gender": "female",
    "__v": 0
}
```
## /books/authors/:id | 2.4
### GET
Retrieves one booked based on it's ID.

Response: 
```json
{
    "_id": "643f1a41176e03c50b34dfd2",
    "name": "Daija Cruickshank",
    "age": "22",
    "gender": "female",
    "__v": 0
}
```

### DELETE
Delete one author based on it's ID.

Response:
```json
{
    "message": "author deleted successfully",
    "deleted_author_name": "Jerrod Torphy",
    "data": {
        "_id": "643f1a41176e03c50b34dfd8",
        "name": "Jerrod Torphy",
        "age": "87",
        "gender": "male",
        "__v": 0
    }
}
```

### PUT
Update one author based on it's ID.

Request:
```json
{
    "name": "Tillman Grimesey",
    "age": "40",
    "gender": "female"
}
```
Response:
```json
{
    "message": "Successfully updated",
    "author": {
        "_id": "643f1a41176e03c50b34dfdb",
        "name": "Tillman Grimesey",
        "age": "40",
        "gender": "female",
        "__v": 0
    }
}
```
## /books/owners | 2.5
### GET
Retrieves a list of all book-owners 

Response:
```json
[
    {
        "_id": "643f1a43176e03c50b34e09c",
        "name": "Carmel Schuppe",
        "age": "58",
        "email": "Franz_Langosh44@yahoo.com",
        "address": "Adriana Squares 77",
        "__v": 0
    },
    and it continues...
]
```

### POST
Adds one owner to the list of owners

Request:
```json
{
    "name": "Mynes",
    "age": "28",
    "email": "mynes@hotmail.com",
    "address": "mynesstreet 76"
}
```
Response:
```json
{
    "_id": "64415a6465de57d22e75713c",
    "name": "Mynes",
    "age": "28",
    "email": "mynes@hotmail.com",
    "address": "mynesstreet 76",
    "__v": 0
}
```

## /books/owners/:id 2.6
### GET
Retrieves one owner based on it's ID

Response:
```json
{
    "_id": "643f1a43176e03c50b34e0a0",
    "name": "Mabelle Rogahn",
    "age": "50",
    "email": "Leone_Daugherty@hotmail.com",
    "address": "Maddison Creek 37",
    "__v": 0
}
```

### DELETE
Deletes one owner based on it's ID

Response:
```json
{
    "message": "owner deleted successfully",
    "deleted_owner_name": "Vivianne Kub",
    "data": {
        "_id": "643f1a43176e03c50b34e0a2",
        "name": "Vivianne Kub",
        "age": "66",
        "email": "Berta_Corkery85@hotmail.com",
        "address": "Reinger Knoll 27",
        "__v": 0
    }
}
```

### PUT
Updates one owner based on it's ID

Request:
```json
{
    "name": "Donald Trump",
    "age": "80",
    "email": "Donaldo123@hotmail.com",
    "address": "White House 37",
}
```
Response:
```json
{
    "message": "Successfully updated",
    "owner": {
        "_id": "643f1a43176e03c50b34e0a0",
        "name": "Donald Trump",
        "age": "80",
        "email": "Donaldo123@hotmail.com",
        "address": "White House 37",
        "__v": 0
    }
}
```


