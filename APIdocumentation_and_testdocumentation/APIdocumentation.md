
# Table of Contents | 0
- [Table of Contents | 0](#table-of-contents--0)
- [Bookhome Documentation | 1](#bookhome-documentation--1)
  - [Quick Start | 1.1](#quick-start--11)
- [Authorization and Authentication](#authorization-and-authentication)
- [Endpoints and HTTP Methods explained with Examples | 2](#endpoints-and-http-methods-explained-with-examples--2)
  - [api/books | 2.1](#apibooks--21)
    - [GET](#get)
    - [POST](#post)
  - [api/books/{id} | 2.2](#apibooksid--22)
    - [GET](#get-1)
    - [DELETE](#delete)
    - [PUT](#put)
  - [api/books/authors | 2.3](#apibooksauthors--23)
    - [GET](#get-2)
    - [POST](#post-1)
  - [api/books/authors/{id} | 2.4](#apibooksauthorsid--24)
    - [GET](#get-3)
    - [DELETE](#delete-1)
    - [PUT](#put-1)
  - [api/books/owners | 2.5](#apibooksowners--25)
    - [GET](#get-4)
    - [POST](#post-2)
  - [api/books/owners/{id} | 2.6](#apibooksownersid--26)
    - [GET](#get-5)
    - [DELETE](#delete-2)
    - [PUT](#put-2)
- [Search Queries for Endpoints | 3](#search-queries-for-endpoints--3)
  - [api/books search queries 3.1](#apibooks-search-queries-31)
  - [api/authors search queries 3.2](#apiauthors-search-queries-32)
  - [api/owners search queries 3.3](#apiowners-search-queries-33)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [End](#end)

# Bookhome Documentation | 1
The bookhome API provides a RESTful interface for books, authors and owners
## Quick Start | 1.1
```
http://localhost:3457/api/books | to get a list of all books

http://localhost:3457/api/authors | to get a list of all 
authors

http://localhost:3457/api/owners | to get a list of all owners

Add an {id} to the end of an endpoint to get one book, author or owner.

example: http://localhost:3457/api/books/644691a8f8fdbc7b4399669e
```
# Authorization and Authentication
This API is local, so right now you can only access it by copying or forking my github repository and using a MongoDB Atlas connection string to connect to the database.

# Endpoints and HTTP Methods explained with Examples | 2
## api/books | 2.1
### GET
Retrieves a list of all books.

Response:
```json
[
    {
        "_id": "644aab25c6add5f281a77112",
        "authors": [
            {
                "_id": "6448860601e8ff679d84964b",
                "name": "Charles Hirthe"
            }
        ],
        "title": "Deadly Gunsss我的你",
        "rating": 3,
        "releaseDate": "1499-03-01",
        "description": "Zuo Wong Chang Long.",
        "bookOwner": {
            "_id": "6448860801e8ff679d84970a",
            "name": "Karson Gibson"
        },
        "__v": 0
    }
    and it continues...
]
```

### POST
Add a book to the list of books.

Request:
```json
{
   "title": "Deadly Gunsss我的你",
   "rating": 5,
   "releaseDate": "1499-03-01",
   "rating": 3,
   "description": "Zuo Wong Chang Long.",
   "authors": [{"_id": "6448860601e8ff679d84964b"}],
   "bookOwner": {"_id": "6448860801e8ff679d84970a"}
}
```
Response:
```json
{
    "authors": [
        "6448860601e8ff679d84964b"
    ],
    "_id": "644aab25c6add5f281a77112",
    "title": "Deadly Gunsss我的你",
    "rating": 3,
    "releaseDate": "1499-03-01T00:00:00.000Z",
    "description": "Zuo Wong Chang Long.",
    "bookOwner": "6448860801e8ff679d84970a",
    "__v": 0
}
```




## api/books/{id} | 2.2
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
    "title": "Lord of the Rings updated"
}
```
Response:
```json
{
    "message": "Successfully updated",
    "updatebook": {
        "_id": "6448860c01e8ff679d849849",
        "authors": [
            "6448860701e8ff679d84965f"
        ],
        "title": "Lord of the Rings updated",
        "genre": "Thriller",
        "rating": 5,
        "releaseDate": "2019-11-28T08:45:19.028Z",
        "description": "Earum animi quasi error. Est necessitatibus ipsum perspiciatis corporis ut tempora. Asperiores alias occaecati blanditiis repellat repellendus repellat culpa veritatis. Animi sed mollitia excepturi magni delectus veniam voluptas optio repellat.",
        "__v": 0
    }
}
```
## api/books/authors | 2.3
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
## api/books/authors/{id} | 2.4
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
## api/books/owners | 2.5
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

## api/books/owners/{id} | 2.6
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
# Search Queries for Endpoints | 3
## api/books search queries 3.1
api/books has limit=10 as default

```
api/books?title=:name:

example: http://localhost:3457/api/books?title=Maxime

api/books?genre=:genre:

example: http://localhost:3457/api/books?genre=Fantasy

api/books?rating=:number:

example: http://localhost:3457/api/books?rating=3

api/books?releaseDate=:year:

example: http://localhost:3457/api/books?releaseDate=1955

api/books?limit=:number:

example: http://localhost:3457/api/books?limit=3

api/books?offset=:number:

example: http://localhost:3457/api/books?offset=20

api/books?authors=:author:

example: http://localhost:3457/api/books?authors=Zoe%20Jenkins
```


## api/authors search queries 3.2
```
api/authors?name=:name:

example: http://localhost:3457/api/authors?name=Electa%20Farrell

api/authors?age=:age:

example: http://localhost:3457/api/authors?age=23

api/authors?gender=:female or male:

example: http://localhost:3457/api/authors?gender=male
```
## api/owners search queries 3.3
```
api/owners?name=:name:

example: http://localhost:3457/api/owners?name=Ted

api/owners?age=:age:

example: http://localhost:3457/api/owners?age=26

api/owners?email=:email:

example: http://localhost:3457/api/owners?
email=Amani40@hotmail.com

api/owners?address=:address

example: http://localhost:3457/api/owners?
address=Nicolette%20Grove%209
```

# Error Handling
|Error Code|Error Name|Description|Possible Cause|Possible Solution|
|:---------|:---------|:----------|:-------------|:----------------|
|400|Bad request|API Cannot process request because of invalid syntax|Invalid request parameters or missing required parameters|Check the request parameters and make sure they're valid|
|404|Not found|The requested response could not be found|Invalid endpoint or deleted object/identifier|Make sure the object/identifier or endpoint exists before you make the request|
|500|Internal Server Error|Something happened to the server that prevents it from fulfilling the request|Server-side error or bug or internet connection fail|Make sure database is connected and running or contact server owner/administrator|

# Rate Limiting
My API has a rate limiter built in. To avoid exceeding the limit, just make sure you don't send more than 100 request under one minute. It resets every minute.

# End
Thanks for everything. LZA

