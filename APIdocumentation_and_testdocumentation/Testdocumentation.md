- [Manual tests | 1](#manual-tests--1)
  - [Verify HTTP Status Code for Successful GET Request | 1](#verify-http-status-code-for-successful-get-request--1)
    - [Objective |  1](#objective---1)
    - [Test Procedure | 1](#test-procedure--1)
    - [Test Data | 1](#test-data--1)
    - [Test Results | 1](#test-results--1)
    - [Test Report | 1](#test-report--1)
  - [Check if the API returns the expected data format (e.g., JSON, XML) in the response. | 2](#check-if-the-api-returns-the-expected-data-format-eg-json-xml-in-the-response--2)
    - [Objective | 2](#objective--2)
    - [Test Procedure | 2](#test-procedure--2)
    - [Test Data | 2](#test-data--2)
    - [Test Results | 2](#test-results--2)
    - [Test Report | 2](#test-report--2)
  - [Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request. | 3](#ensure-that-the-api-returns-the-correct-http-status-code-eg-400-bad-request-for-an-invalid-request--3)
    - [Objective | 3](#objective--3)
    - [Test Procedure | 3](#test-procedure--3)
    - [Test Data | 3](#test-data--3)
    - [Test Results | 3](#test-results--3)
    - [Test Report | 3](#test-report--3)
  - [Test if the API returns the correct data when querying with specific filters or search criteria. | 4](#test-if-the-api-returns-the-correct-data-when-querying-with-specific-filters-or-search-criteria--4)
    - [Objective | 4](#objective--4)
    - [Test Procedure | 4](#test-procedure--4)
    - [Test Data | 4](#test-data--4)
    - [Test Results | 4](#test-results--4)
    - [Test Report | 4](#test-report--4)
  - [Verify that the API returns paginated results when a large number of records are requested. | 5](#verify-that-the-api-returns-paginated-results-when-a-large-number-of-records-are-requested--5)
    - [Objective | 5](#objective--5)
    - [Test Procedure | 5](#test-procedure--5)
    - [Test Data | 5](#test-data--5)
    - [Test Results | 5](#test-results--5)
    - [Test Report | 5](#test-report--5)
  - [Check if the API handles special characters and non-English text correctly in input data and returned responses. |](#check-if-the-api-handles-special-characters-and-non-english-text-correctly-in-input-data-and-returned-responses-)
    - [Objective |](#objective-)
    - [Test Procedure |](#test-procedure-)
    - [Test Data |](#test-data-)
    - [Test Results |](#test-results-)
    - [Test Report |](#test-report-)
  - [|](#)
    - [Objective |](#objective--1)
    - [Test Procedure |](#test-procedure--1)
    - [Test Data |](#test-data--1)
    - [Test Results |](#test-results--1)
    - [Test Report |](#test-report--1)
  - [|](#-1)
    - [Objective |](#objective--2)
    - [Test Procedure |](#test-procedure--2)
    - [Test Data |](#test-data--2)
    - [Test Results |](#test-results--2)
    - [Test Report |](#test-report--2)
  - [|](#-2)
    - [Objective |](#objective--3)
    - [Test Procedure |](#test-procedure--3)
    - [Test Data |](#test-data--3)
    - [Test Results |](#test-results--3)
    - [Test Report |](#test-report--3)
  - [|](#-3)
    - [Objective |](#objective--4)
    - [Test Procedure |](#test-procedure--4)
    - [Test Data |](#test-data--4)
    - [Test Results |](#test-results--4)
    - [Test Report |](#test-report--4)
  - [|](#-4)
    - [Objective |](#objective--5)
    - [Test Procedure |](#test-procedure--5)
    - [Test Data |](#test-data--5)
    - [Test Results |](#test-results--5)
    - [Test Report |](#test-report--5)
  - [|](#-5)
    - [Objective |](#objective--6)
    - [Test Procedure |](#test-procedure--6)
    - [Test Data |](#test-data--6)
    - [Test Results |](#test-results--6)
    - [Test Report |](#test-report--6)
  - [|](#-6)
    - [Objective |](#objective--7)
    - [Test Procedure |](#test-procedure--7)
    - [Test Data |](#test-data--7)
    - [Test Results |](#test-results--7)
    - [Test Report |](#test-report--7)

# Manual tests | 1
## Verify HTTP Status Code for Successful GET Request | 1
### Objective |  1
To verify that the API returns the correct HTTP status code (200 OK) for a successful GET request.
### Test Procedure | 1
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint(http://localhost:3457/books).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct HTTP status code (200 OK) for the successful GET request.
Record the test results in a test report.
### Test Data | 1
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expected HTTP Status Code: 200 OK
### Test Results | 1
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify HTTP Status Code for Successful GET Request|API returns HTTP status code 200 OK for successful GET request|API returns HTTP status code 200 OK for successful GET request|Pass|
### Test Report | 1
The API was successfully tested for returning the correct HTTP status code for a successful GET request. The test case passed with the actual result matching the expected result.

## Check if the API returns the expected data format (e.g., JSON, XML) in the response. | 2
### Objective | 2
To verify that that the API returns the correct data format in the response(In this case JSON) after sending a GET request.
### Test Procedure | 2
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint(http://localhost:3457/books).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct format in the headers view in the response body. Which in this case is JSON format.
### Test Data | 2
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expected header Content-type: application/json; charset=utf-8
### Test Results | 2
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that that the API returns the correct data format in the response|The response body to have the content type: application/json; charset=utf-8|The response body has the content type: application/json; charset=utf-8|Pass|
### Test Report | 2
The API response body has the correct data format, which in this case was JSON. The expected result matches the actual result.

## Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request. | 3
### Objective | 3
To verify that the API returns the correct HTTP status code (e.g., 400 Bad request) for a successful GET request.
### Test Procedure | 3
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint but make it invalid (http://localhost:3457/bookss).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct HTTP response (e.g, 400 Bad Request)
### Test Data | 3
- Endpoint: http://localhost:3000/bookss
- HTTP Method: GET
- Expected HTTP Status Code: 400 Bad request
### Test Results | 3
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the API returns the correct HTTP status code (e.g., 400 Bad request) for a successful GET request.|API returns HTTP status code 400 bad request|API returns HTTP status code 404 not found|Fail|
### Test Report | 3
The API was unsuccesfully tested for returning invalid HTTP status code 400 bad request. It gave us a 404 not found status code. The expected result did not match the actual result.
## Test if the API returns the correct data when querying with specific filters or search criteria. | 4
### Objective | 4
To verify that we get the correct data when querying with specific filters or search criteria
### Test Procedure | 4
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the endpoint you want to test (http://localhost:3457/books).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct data when querying with the specific filters or search criteria(e.g., ?title=Rerum%20velit)
### Test Data | 4
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expecting endpoint to have the correct data when searching for title: title, authors, genre, rating, releaseDate, description and bookOwner
### Test Results | 4
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that we get the correct data when querying with specific filters or search criteria|Response body to have correct data with a title query(?title=:name:) when sending a GET request|Response body has the correct data when sending a GET request with title query(?title=:name:)|Pass|
### Test Report | 4
The response body had the correct data when querying with specific filters or search criteria. The expected result matches the actual result.
## Verify that the API returns paginated results when a large number of records are requested. | 5
### Objective | 5
To verify that the API returns paginated results when a large number of records are requested.
### Test Procedure | 5
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint but make it invalid (http://localhost:3457/bookss).
5. Click on the "Send" button to send the request to the API.
6. Verify if there's any paginated results in the headers area in the response.
### Test Data | 5
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expecting headers to have a paginated result
### Test Results | 5
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the API returns paginated results when a large number of records are requested|API to return paginated results after sending a GET request|API does not return paginated results after sending a GET request|Fail|
### Test Report | 5
The response headers did not have paginated results, therefore the expected result does not match the actual result.
##  Check if the API handles special characters and non-English text correctly in input data and returned responses. | 
### Objective |
To verify that the API can handle special characters and non-English text correctly in input data and returned responses.
### Test Procedure | 
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint but make it invalid (http://localhost:3457/bookss).
5. Click on the "Send" button to send the request to the API.
6. Verify that the input data and response body can handle special characters and non-English text correctly.
### Test Data | 
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expecting it to be able to take non-English and special characters in the input data and response body correctly
### Test Results | 
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the input data and response body can have non-English characters and special characters|API to be able to return a successful response with a non-English character and special characters in the input data|API returned a successful response with a non-English character and/or a special character|Pass|
### Test Report | 
The API were able to handle non-English characters and special characters in the input data and the response body correctly. The expected result matches with the actual result.
##  | 
### Objective | 
### Test Procedure | 
### Test Data | 
### Test Results | 
### Test Report | 

##  | 
### Objective | 
### Test Procedure | 
### Test Data | 
### Test Results | 
### Test Report | 

##  | 
### Objective | 
### Test Procedure | 
### Test Data | 
### Test Results | 
### Test Report | 

##  | 
### Objective | 
### Test Procedure | 
### Test Data | 
### Test Results | 
### Test Report | 

##  | 
### Objective | 
### Test Procedure | 
### Test Data | 
### Test Results | 
### Test Report | 

##  | 
### Objective | 
### Test Procedure | 
### Test Data | 
### Test Results | 
### Test Report | 

##  | 
### Objective | 
### Test Procedure | 
### Test Data | 
### Test Results | 
### Test Report | 


