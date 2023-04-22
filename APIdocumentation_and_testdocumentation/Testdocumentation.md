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
  - [Check if the API handles special characters and non-English text correctly in input data and returned responses. | 6](#check-if-the-api-handles-special-characters-and-non-english-text-correctly-in-input-data-and-returned-responses--6)
    - [Objective |](#objective-)
    - [Test Procedure | 6](#test-procedure--6)
    - [Test Data | 6](#test-data--6)
    - [Test Results | 6](#test-results--6)
    - [Test Report | 6](#test-report--6)
  - [Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency. | 7](#test-the-apis-response-when-sending-concurrent-requests-to-ensure-that-it-can-handle-multiple-users-and-maintain-data-consistency--7)
    - [Objective | 7](#objective--7)
    - [Test Procedure | 7](#test-procedure--7)
    - [Test Data | 7](#test-data--7)
    - [Test Results | 7](#test-results--7)
    - [Test Report | 7](#test-report--7)
  - [Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method. | 8](#test-if-the-api-correctly-handles-different-http-methods-get-post-put-delete-for-each-endpoint-and-returns-appropriate-status-codes-and-responses-for-each-method--8)
    - [Objective | 8](#objective--8)
    - [Test Procedure | 8](#test-procedure--8)
    - [Test Data | 8](#test-data--8)
    - [Test Results | 8](#test-results--8)
    - [Test Report | 8](#test-report--8)
  - [Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests. | 9](#check-if-the-api-correctly-handles-updates-to-existing-records-ensuring-that-changes-are-saved-and-reflected-in-subsequent-requests--9)
    - [Objective | 9](#objective--9)
    - [Test Procedure | 9](#test-procedure--9)
    - [Test Data | 9](#test-data--9)
    - [Test Results | 9](#test-results--9)
    - [Test Report | 9](#test-report--9)
  - [Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously. | 10](#test-the-apis-performance-under-heavy-load-simulating-a-large-number-of-users-making-requests-simultaneously--10)
    - [Objective | 10](#objective--10)
    - [Test Procedure | 10](#test-procedure--10)
    - [Test Data | 10](#test-data--10)
    - [Test Results | 10](#test-results--10)
    - [Test Report | 10](#test-report--10)
  - [Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity. | 11](#verify-that-the-api-can-recover-gracefully-from-failures-such-as-database-connection-issues-without-compromising-data-integrity--11)
    - [Objective | 11](#objective--11)
    - [Test Procedure | 11](#test-procedure--11)
    - [Test Data | 11](#test-data--11)
    - [Test Results | 11](#test-results--11)
    - [Test Report | 11](#test-report--11)
  - [Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned. | 12](#test-the-apis-ability-to-handle-edge-cases-such-as-requests-with-missing-or-invalid-parameters-and-ensure-that-appropriate-error-messages-are-returned--12)
    - [Objective | 12](#objective--12)
    - [Test Procedure | 12](#test-procedure--12)
    - [Test Data | 12](#test-data--12)
    - [Test Results | 12](#test-results--12)
    - [Test Report | 12](#test-report--12)
  - [Verify that the API correctly implements rate limiting or throttling mechanisms to prevent abuse or excessive use of resources. | 13](#verify-that-the-api-correctly-implements-rate-limiting-or-throttling-mechanisms-to-prevent-abuse-or-excessive-use-of-resources--13)
    - [Objective | 13](#objective--13)
    - [Test Procedure | 13](#test-procedure--13)
    - [Test Data | 13](#test-data--13)
    - [Test Results | 13](#test-results--13)
    - [Test Report | 13](#test-report--13)

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
##  Check if the API handles special characters and non-English text correctly in input data and returned responses. | 6
### Objective |
To verify that the API can handle special characters and non-English text correctly in input data and returned responses.
### Test Procedure | 6
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint but make it invalid (http://localhost:3457/bookss).
5. Click on the "Send" button to send the request to the API.
6. Verify that the input data and response body can handle special characters and non-English text correctly.
### Test Data | 6
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expecting it to be able to take non-English and special characters in the input data and response body correctly
### Test Results | 6
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the input data and response body can have non-English characters and special characters|API to be able to return a successful response with a non-English character and special characters in the input data|API returned a successful response with a non-English character and/or a special character|Pass|
### Test Report | 6
The API were able to handle non-English characters and special characters in the input data and the response body correctly. The expected result matches with the actual result.
## Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency. | 7
### Objective | 7
To verify that the API can handle concurrent requests to ensure that it can handle multiple users and maintain data consistency
### Test Procedure | 7
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint but make it invalid (http://localhost:3457/bookss).
5. Click on the "Send" button multiple times to send the multiple request to the API.
6. Verify that the every response you get is a success and it doesn't throw an error.
### Test Data | 7
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expecting the response to not throw an error after many GET-requests
### Test Results | 7
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency|For every response that we get to not throw back an error when sending multiple GET-requests|It does not throw back an error when sending multiple GET-requests|Pass|
### Test Report | 7
The API were able to handle multiple GET-requests without throwing an error. The expected result matches the actual result.

##  Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method. | 8
### Objective | 8
To verify that each endpoint in the API returns an appropriate status code for each HTTP Method(GET, POST, DELETE, PUT). 
### Test Procedure | 8
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint but make it invalid (http://localhost:3457/bookss).
5. Click on the "Send" button for each HTTP method on each endpoint.
6. Verify that you get an appropriate response body and status code for each HTTP Method in each endpoint(200 OK).
### Test Data | 8
- Endpoint: http://localhost:3457/books
- HTTP Method: GET
- Expecting the response body to be correct and that the status code is OK for each HTTP method for every endpoint(200 OK)
### Test Results | 8
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.|API returns a response body and OK status code for each HTTP method for each endpoint|API returns a response body and OK status code for each HTTP method for each endpoint|Pass|
### Test Report | 8
Each HTTP method for each endpoint returns the correct response body and status code. The expected result matches with the actual result.

## Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests. | 9
### Objective | 9
### Test Procedure | 9
### Test Data | 9
### Test Results | 9
### Test Report | 9

## Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously. | 10
### Objective | 10
### Test Procedure | 10
### Test Data | 10
### Test Results | 10
### Test Report | 10

## Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity. | 11
### Objective | 11
### Test Procedure | 11
### Test Data | 11
### Test Results | 11
### Test Report | 11

## Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned. | 12
### Objective | 12
### Test Procedure | 12
### Test Data | 12
### Test Results | 12
### Test Report | 12

## Verify that the API correctly implements rate limiting or throttling mechanisms to prevent abuse or excessive use of resources. | 13
### Objective | 13
### Test Procedure | 13
### Test Data | 13
### Test Results | 13
### Test Report | 13


