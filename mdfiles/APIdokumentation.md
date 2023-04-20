1. bookhome API documentation

This API provides a RESTful interface for books, authors and owners.

- 1. [Summary](#Summary)

2.  Endpoints

        1.  Books

            1.  GET /books

                    Retrieves a list of all books.

                    Response:

                [
                {
                "id": "644129d475e983071dea2e0a",
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
                "v": 0
                }
                ] 2[

    {
    "id": "644129d475e983071dea2e0a",
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
    "v": 0
    }
    ]

```|
| /books/:id | GET | Retrieves a single book by ID. | - |


                Retrieves a single book by ID.

                Example: /books/644129d475e983071dea2e0a

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
            "v": 0

        }

              3. POST /books

                Creates a new book.

                Request:
                {
                  "title": "Harry Potter and the Philosopher's Stone",
                  "genre": "Fiction",
                  "rating": 4,
                  "releaseDate": "1951-07-16",
                  "description": "A fantasy adventure following Harry Potter and his weird crew",
                  "authors": [{"_id": "616eeebd3b3aa62d1035c5e5"}],
                  "bookOwner": [{"_id": "616efef09895ca53f30a7f1a"}]
                }

                Response:
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
