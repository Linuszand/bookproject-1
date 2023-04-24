# Table of Contents | 0
- [Table of Contents | 0](#table-of-contents--0)
- [Manual tests | 1](#manual-tests--1)
  - [Verify HTTP Status Code for Successful GET Request | 1.1](#verify-http-status-code-for-successful-get-request--11)
    - [Objective |  1.1](#objective---11)
    - [Test Procedure | 1.1](#test-procedure--11)
    - [Test Data | 1.1](#test-data--11)
    - [Test Results | 1.1](#test-results--11)
    - [Test Report | 1.1](#test-report--11)
  - [Check if the API returns the expected data format (e.g., JSON, XML) in the response. | 1.2](#check-if-the-api-returns-the-expected-data-format-eg-json-xml-in-the-response--12)
    - [Objective | 1.2](#objective--12)
    - [Test Procedure | 1.2](#test-procedure--12)
    - [Test Data | 1.2](#test-data--12)
    - [Test Results | 1.2](#test-results--12)
    - [Test Report | 1.2](#test-report--12)
  - [Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request. | 1.3](#ensure-that-the-api-returns-the-correct-http-status-code-eg-400-bad-request-for-an-invalid-request--13)
    - [Objective | 1.3](#objective--13)
    - [Test Procedure | 1.3](#test-procedure--13)
    - [Test Data | 1.3](#test-data--13)
    - [Test Results | 1.3](#test-results--13)
    - [Test Report | 1.3](#test-report--13)
  - [Test if the API returns the correct data when querying with specific filters or search criteria. | 1.4](#test-if-the-api-returns-the-correct-data-when-querying-with-specific-filters-or-search-criteria--14)
    - [Objective | 1.4](#objective--14)
    - [Test Procedure | 1.4](#test-procedure--14)
    - [Test Data | 1.4](#test-data--14)
    - [Test Results | 1.4](#test-results--14)
    - [Test Report | 1.4](#test-report--14)
  - [Verify that the API returns paginated results when a large number of records are requested. | 1.5](#verify-that-the-api-returns-paginated-results-when-a-large-number-of-records-are-requested--15)
    - [Objective | 1.5](#objective--15)
    - [Test Procedure | 1.5](#test-procedure--15)
    - [Test Data | 1.5](#test-data--15)
    - [Test Results | 1.5](#test-results--15)
    - [Test Report | 1.5](#test-report--15)
  - [Check if the API handles special characters and non-English text correctly in input data and returned responses. | 1.6](#check-if-the-api-handles-special-characters-and-non-english-text-correctly-in-input-data-and-returned-responses--16)
    - [Objective |](#objective-)
    - [Test Procedure | 1.6](#test-procedure--16)
    - [Test Data | 1.6](#test-data--16)
    - [Test Results | 1.6](#test-results--16)
    - [Test Report | 1.6](#test-report--16)
  - [Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency. | 1.7](#test-the-apis-response-when-sending-concurrent-requests-to-ensure-that-it-can-handle-multiple-users-and-maintain-data-consistency--17)
    - [Objective | 1.7](#objective--17)
    - [Test Procedure | 1.7](#test-procedure--17)
    - [Test Data | 1.7](#test-data--17)
    - [Test Results | 1.7](#test-results--17)
    - [Test Report | 1.7](#test-report--17)
  - [Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method. | 1.8](#test-if-the-api-correctly-handles-different-http-methods-get-post-put-delete-for-each-endpoint-and-returns-appropriate-status-codes-and-responses-for-each-method--18)
    - [Objective | 1.8](#objective--18)
    - [Test Procedure | 1.8](#test-procedure--18)
    - [Test Data | 1.8](#test-data--18)
    - [Test Results | 1.8](#test-results--18)
    - [Test Report | 1.8](#test-report--18)
  - [Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests. | 1.9](#check-if-the-api-correctly-handles-updates-to-existing-records-ensuring-that-changes-are-saved-and-reflected-in-subsequent-requests--19)
    - [Objective | 1.9](#objective--19)
    - [Test Procedure | 1.9](#test-procedure--19)
    - [Test Data | 1.9](#test-data--19)
    - [Test Results | 1.9](#test-results--19)
    - [Test Report | 1.9](#test-report--19)
  - [Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously. | 1.10](#test-the-apis-performance-under-heavy-load-simulating-a-large-number-of-users-making-requests-simultaneously--110)
    - [Objective | 1.10](#objective--110)
    - [Test Procedure | 1.10](#test-procedure--110)
    - [Test Data | 1.10](#test-data--110)
    - [Test Results | 1.10](#test-results--110)
    - [Test Report | 1.10](#test-report--110)
  - [Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity. | 1.11](#verify-that-the-api-can-recover-gracefully-from-failures-such-as-database-connection-issues-without-compromising-data-integrity--111)
    - [Objective | 1.11](#objective--111)
    - [Test Procedure | 1.11](#test-procedure--111)
    - [Test Data | 1.11](#test-data--111)
    - [Test Results | 1.11](#test-results--111)
    - [Test Report | 1.11](#test-report--111)
  - [Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned. | 1.12](#test-the-apis-ability-to-handle-edge-cases-such-as-requests-with-missing-or-invalid-parameters-and-ensure-that-appropriate-error-messages-are-returned--112)
    - [Objective | 1.12](#objective--112)
    - [Test Procedure | 1.12](#test-procedure--112)
    - [Test Data | 1.12](#test-data--112)
    - [Test Results | 1.12](#test-results--112)
    - [Test Report | 1.12](#test-report--112)
  - [Verify that the API correctly implements rate limiting or throttling mechanisms to prevent abuse or excessive use of resources. | 1.13](#verify-that-the-api-correctly-implements-rate-limiting-or-throttling-mechanisms-to-prevent-abuse-or-excessive-use-of-resources--113)
    - [Objective | 1.13](#objective--113)
    - [Test Procedure | 1.13](#test-procedure--113)
    - [Test Data | 1.13](#test-data--113)
    - [Test Results | 1.13](#test-results--113)
    - [Test Report | 1.13](#test-report--113)
- [Automatic tests | 2](#automatic-tests--2)
  - [Validate that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request. | 2.1](#validate-that-the-api-returns-the-correct-http-status-code-eg-200-ok-for-a-successful-get-request--21)
    - [Objective | 2.1](#objective--21)
    - [Test Procedure | 2.1](#test-procedure--21)
    - [Test Data | 2.1](#test-data--21)
    - [Test Results | 2.1](#test-results--21)
    - [Test Report | 2.1](#test-report--21)
  - [Verify that the API returns the expected data format (e.g., JSON, XML) in the response. | 2.2](#verify-that-the-api-returns-the-expected-data-format-eg-json-xml-in-the-response--22)
    - [Objective | 2.2](#objective--22)
    - [Test Procedure | 2.2](#test-procedure--22)
    - [Test Data | 2.2](#test-data--22)
    - [Test Results | 2.2](#test-results--22)
    - [Test Report | 2.2](#test-report--22)
  - [Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid requests. | 2.3](#ensure-that-the-api-returns-the-correct-http-status-code-eg-400-bad-request-for-an-invalid-requests--23)
    - [Objective | 2.3](#objective--23)
    - [Test Procedure | 2.3](#test-procedure--23)
    - [Test Data | 2.3](#test-data--23)
    - [Test Results | 2.3](#test-results--23)
    - [Test Report | 2.3](#test-report--23)
  - [Create an automated test that sends a request with specific filters or search criteria and checks if the API returns the correct data. | 2.4](#create-an-automated-test-that-sends-a-request-with-specific-filters-or-search-criteria-and-checks-if-the-api-returns-the-correct-data--24)
    - [Objective | 2.4](#objective--24)
    - [Test Procedure | 2.4](#test-procedure--24)
    - [Test Data | 2.4](#test-data--24)
    - [Test Results | 2.4](#test-results--24)
    - [Test Report | 2.4](#test-report--24)
  - [Write an automated test to verify that the API returns paginated results when a large number of records are requested. | 2.5](#write-an-automated-test-to-verify-that-the-api-returns-paginated-results-when-a-large-number-of-records-are-requested--25)
    - [Objective | 2.5](#objective--25)
    - [Test Procedure | 2.5](#test-procedure--25)
    - [Test Data | 2.5](#test-data--25)
    - [Test Results | 2.5](#test-results--25)
    - [Test Report | 2.5](#test-report--25)
  - [Test if the API handles special characters and non-English text correctly in input data and returned responses using an automated testing tool. | 2.6](#test-if-the-api-handles-special-characters-and-non-english-text-correctly-in-input-data-and-returned-responses-using-an-automated-testing-tool--26)
    - [Objective | 2.6](#objective--26)
    - [Test Procedure | 2.6](#test-procedure--26)
    - [Test Data | 2.6](#test-data--26)
    - [Test Results | 2.6](#test-results--26)
    - [Test Report | 2.6](#test-report--26)
  - [Develop an automated test that sends concurrent requests to the API to ensure that it can handle multiple users and maintain data consistency. | 2.7](#develop-an-automated-test-that-sends-concurrent-requests-to-the-api-to-ensure-that-it-can-handle-multiple-users-and-maintain-data-consistency--27)
    - [Objective | 2.7](#objective--27)
    - [Test Procedure | 2.7](#test-procedure--27)
    - [Test Data | 2.7](#test-data--27)
    - [Test Results | 2.7](#test-results--27)
    - [Test Report | 2.7](#test-report--27)
  - [Create an automated test and test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method. | 2.8](#create-an-automated-test-and-test-if-the-api-correctly-handles-different-http-methods-get-post-put-delete-for-each-endpoint-and-returns-appropriate-status-codes-and-responses-for-each-method--28)
    - [Objective | 2.8](#objective--28)
    - [Test Procedure | 2.8](#test-procedure--28)
    - [Test Data | 2.8](#test-data--28)
    - [Test Results | 2.8](#test-results--28)
    - [Test Report | 2.8](#test-report--28)
  - [Write an automated test to check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests. | 2.9](#write-an-automated-test-to-check-if-the-api-correctly-handles-updates-to-existing-records-ensuring-that-changes-are-saved-and-reflected-in-subsequent-requests--29)
    - [Objective | 2.9](#objective--29)
    - [Test Procedure | 2.9](#test-procedure--29)
    - [Test Data | 2.9](#test-data--29)
    - [Test Results | 2.9](#test-results--29)
    - [Test Report | 2.9](#test-report--29)
  - [Design an automated performance test that simulates a large number of users making requests simultaneously to check the API’s performance under heavy load. | 2.10](#design-an-automated-performance-test-that-simulates-a-large-number-of-users-making-requests-simultaneously-to-check-the-apis-performance-under-heavy-load--210)
    - [Objective | 2.10](#objective--210)
    - [Test Procedure | 2.10](#test-procedure--210)
    - [Test Data | 2.10](#test-data--210)
    - [Test Results | 2.10](#test-results--210)
    - [Test Report | 2.10](#test-report--210)
  - [Create an automated test that verifies the API can recover gracefully from failures, such as database connection issues or third-party service outages, without compromising data integrity. | 2.11](#create-an-automated-test-that-verifies-the-api-can-recover-gracefully-from-failures-such-as-database-connection-issues-or-third-party-service-outages-without-compromising-data-integrity--211)
    - [Objective | 2.11](#objective--211)
    - [Test Procedure | 2.11](#test-procedure--211)
    - [Test Data | 2.11](#test-data--211)
    - [Test Results | 2.11](#test-results--211)
    - [Test Report | 2.11](#test-report--211)
  - [Develop an automated test to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned. | 2.12](#develop-an-automated-test-to-handle-edge-cases-such-as-requests-with-missing-or-invalid-parameters-and-ensure-that-appropriate-error-messages-are-returned--212)
    - [Objective | 2.12](#objective--212)
    - [Test Procedure | 2.12](#test-procedure--212)
    - [Test Data | 2.12](#test-data--212)
    - [Test Results | 2.12](#test-results--212)
    - [Test Report | 2.12](#test-report--212)
  - [Write an automated test to verify that the API correctly implements any rate limiting or throttling mechanisms to prevent abuse or excessive use of resources. | 2.13](#write-an-automated-test-to-verify-that-the-api-correctly-implements-any-rate-limiting-or-throttling-mechanisms-to-prevent-abuse-or-excessive-use-of-resources--213)
    - [Objective | 2.13](#objective--213)
    - [Test Procedure | 2.13](#test-procedure--213)
    - [Test Data | 2.13](#test-data--213)
    - [Test Results | 2.13](#test-results--213)
    - [Test Report | 2.13](#test-report--213)

# Manual tests | 1
## Verify HTTP Status Code for Successful GET Request | 1.1
### Objective |  1.1
To verify that the API returns the correct HTTP status code (200 OK) for a successful GET request.
### Test Procedure | 1.1
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint. (http://localhost:3457/api/books).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct HTTP status code (200 OK) for the successful GET request.
Record the test results in a test report.
### Test Data | 1.1
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expected HTTP Status Code: 200 OK
### Test Results | 1.1
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify HTTP Status Code for Successful GET Request|API returns HTTP status code 200 OK for successful GET request|API returns HTTP status code 200 OK for successful GET request|Pass|
### Test Report | 1.1
The API was successfully tested for returning the correct HTTP status code for a successful GET request. The test case passed with the actual result matching the expected result.

## Check if the API returns the expected data format (e.g., JSON, XML) in the response. | 1.2
### Objective | 1.2
To verify that that the API returns the correct data format in the response(In this case JSON) after sending a GET request.
### Test Procedure | 1.2
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint. (http://localhost:3457/api/books).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct format in the headers view in the response body. Which in this case is JSON format.
### Test Data | 1.2
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expected header Content-type: application/json; charset=utf-8
### Test Results | 1.2
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that that the API returns the correct data format in the response|The response body to have the content type: application/json; charset=utf-8|The response body has the content type: application/json; charset=utf-8|Pass|
### Test Report | 1.2
The API response body has the correct data format, which in this case was JSON. The expected result matches the actual result.

## Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request. | 1.3
### Objective | 1.3
To verify that the API returns the correct HTTP status code (e.g., 400 Bad request) for a successful GET request.
### Test Procedure | 1.3
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint but make it invalid (http://localhost:3457/api/bookss).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct HTTP response (e.g, 400 Bad Request)
### Test Data | 1.3
- Endpoint: http://localhost:3000/bookss
- HTTP Method: GET
- Expected HTTP Status Code: 400 Bad request
### Test Results | 1.3
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the API returns the correct HTTP status code (e.g., 400 Bad request) for a successful GET request.|API returns HTTP status code 400 bad request|API returns HTTP status code 404 not found|Fail|
### Test Report | 1.3
The API was unsuccesfully tested for returning invalid HTTP status code 400 bad request. It gave us a 404 not found status code. The expected result did not match the actual result.

## Test if the API returns the correct data when querying with specific filters or search criteria. | 1.4
### Objective | 1.4
To verify that we get the correct data when querying with specific filters or search criteria
### Test Procedure | 1.4
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the endpoint you want to test (http://localhost:3457/api/books).
5. Click on the "Send" button to send the request to the API.
6. Verify that the API returns the correct data when querying with the specific filters or search criteria(e.g., ?title=Rerum%20velit)
### Test Data | 1.4
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expecting endpoint to have the correct data when searching for title: title, authors, genre, rating, releaseDate, description and bookOwner
### Test Results | 1.4
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that we get the correct data when querying with specific filters or search criteria|Response body to have correct data with a title query(?title=:name:) when sending a GET request|Response body has the correct data when sending a GET request with title query(?title=:name:)|Pass|
### Test Report | 1.4
The response body had the correct data when querying with specific filters or search criteria. The expected result matches the actual result.

## Verify that the API returns paginated results when a large number of records are requested. | 1.5
### Objective | 1.5
To verify that the API returns paginated results when a large number of records are requested.
### Test Procedure | 1.5
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoints. (http://localhost:3457/api/books).
5. Click on the "Send" button to send the request to the API.
6. Verify if there's any paginated results in the headers in the response.
### Test Data | 1.5
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expecting headers to have a paginated result
### Test Results | 1.5
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the API returns paginated results when a large number of records are requested|API to return paginated results after sending a GET request|API does not return paginated results after sending a GET request|Fail|
### Test Report | 1.5
The response headers did not have paginated results, therefore the expected result does not match the actual result.
##  Check if the API handles special characters and non-English text correctly in input data and returned responses. | 1.6
### Objective |
To verify that the API can handle special characters and non-English text correctly in input data and returned responses.
### Test Procedure | 1.6
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint. (http://localhost:3457/api/books).
5. Click on the "Send" button to send the request to the API.
1.6. Verify that the input data and response body can handle special characters and non-English text correctly.
### Test Data | 1.6
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expecting it to be able to take non-English and special characters in the input data and response body correctly
### Test Results | 1.6
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the input data and response body can have non-English characters and special characters|API to be able to return a successful response with a non-English character and special characters in the input data|API returned a successful response with a non-English character and/or a special character|Pass|
### Test Report | 1.6
The API were able to handle non-English characters and special characters in the input data and the response body correctly. The expected result matches with the actual result.
## Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency. | 1.7
### Objective | 1.7
To verify that the API can handle concurrent requests to ensure that it can handle multiple users and maintain data consistency
### Test Procedure | 1.7
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint. (http://localhost:3457/api/books).
5. Click on the "Send" button multiple times to send the multiple request to the API.
6. Verify that the every response you get is a success and it doesn't throw an error.
### Test Data | 1.7
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expecting the response to not throw an error after many GET-requests
### Test Results | 1.7
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency|For every response that we get to not throw back an error when sending multiple GET-requests|It does not throw back an error when sending multiple GET-requests|Pass|
### Test Report | 1.7
The API were able to handle multiple GET-requests without throwing an error. The expected result matches the actual result.

##  Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method. | 1.8
### Objective | 1.8
To verify that each endpoint in the API returns an appropriate status code for each HTTP Method(GET, POST, DELETE, PUT). 
### Test Procedure | 1.8
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP methods for the endpoints you want to test (GET, POST, PUT & DELETE).
4. Enter the URL for the each endpoint following the objective: (http://localhost:3457/endpoint & http://localhost:3457/endpoint/{id}).
5. Click on the "Send" button for each HTTP method on each endpoint.
6. Verify that you get an appropriate response body and status code for each HTTP Method in each endpoint(200 OK).
7. Repeat until you've tested each HTTP method for each endpoint.
### Test Data | 1.8
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expecting the response body to be correct and that the status code is OK for each HTTP method for every endpoint(200 OK)
### Test Results | 1.8
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.|API returns a response body and OK status code for each HTTP method for each endpoint|API returns a response body and OK status code for each HTTP method for each endpoint|Pass|
### Test Report | 1.8
Each HTTP method for each endpoint returns the correct response body and status code. The expected result matches with the actual result.

## Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests. | 1.9
### Objective | 1.9
To verify that the API correctly handles updates to records that already exist, ensuring that the changes are saved and reflected in subsequent requests
### Test Procedure | 1.9
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET, PUT(POST, DELETE if needed)).
4. Enter the URL for the books endpoint: (http://localhost:3457/api/books/{id}).
5. Click on the "Send" button to send the request to the API and check the response.
6. Update one book in the API using the PUT HTTP method.
7. Make sure that the book is successfully updated.
### Test Data | 1.9
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET, PUT(POST, DELETE if needed)
- Expecting the updated book to be updated
### Test Results | 1.9
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests|API to update a book based on it's ID and for it to b saved after sending a GET request|The API successfully updates a book based on it's ID, and it is saved after checking with a GET request|Pass|
### Test Report | 1.9
The API was successfully tested for updating a book based on it's ID and then making sure it's saved by doing a GET request after an update.

## Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously. | 1.10
### Objective | 1.10
To verify that the API's performance under heavy load is good enough when making a large number of requests simultaneously.
### Test Procedure | 1.10
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET, PUT(POST, DELETE if needed)).
4. Enter the URL for the books endpoint: (http://localhost:3457/api/books/{id}).
5. Click on the "Send" button a lot of times or use the Postman runner to iterate one GET-request many times.
6. Ensure that the API's performs well enough. It should be under at least 500 ms response time.

### Test Data | 1.10
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expecting the API to be able to handle a heavy load from multiple users sending GET-requests
### Test Results | 1.10
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously|The API to have to have a response time that is less than 500 ms.|The API responded much faster than 500 ms|Pass|
### Test Report | 1.10
The API succeeded in performing well under a heavy load. The expected result matches the actual result.

## Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity. | 1.11
### Objective | 1.11
To verify that the API can recover after a failure such as your network failing while connected to the database.
### Test Procedure | 1.11
1. Make sure you're on for example Postman and can send a GET-request.
2. Disconnect from your network.
3. Send a GET-Request to the http://localhost:3457/api/books endpoint.
4. Make sure it gives an appropriate error response.
5. Go online again and make sure the database is working fine without any issues or changes in data by sending a GET-request to the api/books endpoint.
### Test Data | 1.11
- Endpoint: http://localhost:3457/api/books
- HTTP Method: GET
- Expecting the API to be able to recover after a sudden database connection issue without compromising data intergrity
### Test Results | 1.11
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
|Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity|The API to send an appropriate error message if there's a connection issue with the database and make sure the data doesn't change or disappear after the database comes online again|The API responds with an appropriate error message if i try to send a GET-request while offline and the data hasn't changed after sending a GET-request when going online again|Pass|
### Test Report | 1.11
The data integrity of my database has not been corrupted or changed in any way, shape or form after a network failure while connected to the database. The expected result matches the actual reesult

## Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned. | 1.12
### Objective | 1.12
To verify that the API can handle edge cases, such as requests with missing or invalid parameters. I need to ensure that appropriate error messages are returned.
### Test Procedure | 1.12
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET).
4. Enter the URL for the books endpoint with invalid or missing parameters: (http://localhost:3457/api/books?what=hey or http://localhost:3457/api/books? ).
5. Click on the "Send" button to send the request.
6. Make sure you get an appropriate response back, either an error message or a list of all books.

### Test Data | 1.12
- Endpoint: http://localhost:3457/api/books?what=hey or http://localhost:3457/api/books?
- HTTP Method: GET
- Expecting the API to be able give an appropriate response after typing in invalid search parameters or missing search parameters.
### Test Results | 1.12
|Test Case|Expected Result|Actual Result|Pass/fail|
|:--------|:--------------|:------------|:--------|
Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned|The API to give either an appropriate error message or a list of all books after sending a GET-request with invalid or missing search parameters|The API to give either an appropriate error message or a list of all books after sending a GET-request with invalid or missing search parameters|Pass|
### Test Report | 1.12
The API sent back a list of all the books with invalid or missing search parameters. The expected result matches the actual result.

## Verify that the API correctly implements rate limiting or throttling mechanisms to prevent abuse or excessive use of resources. | 1.13
### Objective | 1.13
### Test Procedure | 1.13
### Test Data | 1.13
### Test Results | 1.13
### Test Report | 1.13

# Automatic tests | 2
## Validate that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request. | 2.1
### Objective | 2.1
To verify that the API returns the correct HTTP status code.
### Test Procedure | 2.1
1. Open Postman and navigate to the collection containing the endpoint you want to test.
2. Create a new request by clicking on the "New" button in the top left corner of the Postman window.
3. Select the HTTP method for the endpoint you want to test (GET, PUT(POST, DELETE if needed)).
4. Enter the URL for the books endpoint: (http://localhost:3457/api/books/{id}).
4. Write a test for checking status code for the books endpoint.
5. Click on the "Send" button to send the request to the API and check if the test passed by clicking at the test results close to the response body.

### Test Data | 2.1
### Test Results | 2.1
### Test Report | 2.1

## Verify that the API returns the expected data format (e.g., JSON, XML) in the response. | 2.2
### Objective | 2.2
### Test Procedure | 2.2
### Test Data | 2.2
### Test Results | 2.2
### Test Report | 2.2

## Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid requests. | 2.3
### Objective | 2.3
### Test Procedure | 2.3
### Test Data | 2.3
### Test Results | 2.3
### Test Report | 2.3

## Create an automated test that sends a request with specific filters or search criteria and checks if the API returns the correct data. | 2.4
### Objective | 2.4
### Test Procedure | 2.4
### Test Data | 2.4
### Test Results | 2.4
### Test Report | 2.4

## Write an automated test to verify that the API returns paginated results when a large number of records are requested. | 2.5
### Objective | 2.5
### Test Procedure | 2.5
### Test Data | 2.5
### Test Results | 2.5
### Test Report | 2.5

## Test if the API handles special characters and non-English text correctly in input data and returned responses using an automated testing tool. | 2.6
### Objective | 2.6
### Test Procedure | 2.6
### Test Data | 2.6
### Test Results | 2.6
### Test Report | 2.6

## Develop an automated test that sends concurrent requests to the API to ensure that it can handle multiple users and maintain data consistency. | 2.7
### Objective | 2.7
### Test Procedure | 2.7
### Test Data | 2.7
### Test Results | 2.7
### Test Report | 2.7

## Create an automated test and test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method. | 2.8
### Objective | 2.8
### Test Procedure | 2.8
### Test Data | 2.8
### Test Results | 2.8
### Test Report | 2.8

## Write an automated test to check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests. | 2.9
### Objective | 2.9
To verify that blablablabla
### Test Procedure | 2.9

### Test Data | 2.9

### Test Results | 2.9
### Test Report | 2.9

## Design an automated performance test that simulates a large number of users making requests simultaneously to check the API’s performance under heavy load. | 2.10
### Objective | 2.10
### Test Procedure | 2.10
### Test Data | 2.10
### Test Results | 2.10
### Test Report | 2.10

## Create an automated test that verifies the API can recover gracefully from failures, such as database connection issues or third-party service outages, without compromising data integrity. | 2.11
### Objective | 2.11
### Test Procedure | 2.11
### Test Data | 2.11
### Test Results | 2.11
### Test Report | 2.11

## Develop an automated test to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned. | 2.12
### Objective | 2.12
### Test Procedure | 2.12
### Test Data | 2.12
### Test Results | 2.12
### Test Report | 2.12

## Write an automated test to verify that the API correctly implements any rate limiting or throttling mechanisms to prevent abuse or excessive use of resources. | 2.13
### Objective | 2.13
### Test Procedure | 2.13
### Test Data | 2.13
### Test Results | 2.13
### Test Report | 2.13

