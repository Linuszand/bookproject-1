- [API Documentation 1](#api-documentation-1)
- [Endpoints and HTTP Methods 2](#endpoints-and-http-methods-2)
  - [/books](#books)
    - [GET](#get)
  - [/books/:id](#booksid)
  - [/authors](#authors)
  - [/owners](#owners)

# API Documentation 1
The bookhome API provides a RESTful interface for books, authors and owners

# Endpoints and HTTP Methods 2
## /books
### GET
Retrieves a list of all books.

Response:
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
    }
]
## /books/:id
Retrieves one book based on the ID.

Response:
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

## /authors

## /owners






 

