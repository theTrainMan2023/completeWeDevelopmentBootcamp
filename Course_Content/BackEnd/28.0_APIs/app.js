/**
 * Application Programming Interface
 * Bridges communication between two different software
 * For instance Weather API - Open Weather
 * Make request through API with your Requirements
 * Like a GET Request/Responds get Data back in return
 * 
 * Another instance is Email collection boc - mailChimp
 * Structures a POST request
 * Reponds if all was collected correctly - 200
 * 
 * Send a tweet to watering device to water the plant
 * Can get feedback of the moisture of the soil.
 * 
 * Software to Create API's
 * GraphQL
 * SOAP
 * REST:API [#1]
 * gRPC
 * 
 * Rest API
 * Uses HTTP Protocol to interact with GET/POST/PUT/PATCH/DELETE
 * make the request using HTTP based on what you need
 * 
 * Use Postman
 * Make a Get request
 * Add the http address
 * this will give a live latituted and longtitude of the satelite
 * type this in googe 
 * 
 * STRUCTURING API REQUESTS
 * Requests are made from your server to another Server
 * This is done via a Public API
 * 
 * API EndPoints
 * -----------------------------
 * 1. BaseURL/Endpoint like for instance /random or /filter [a different route]
 * 1.1 e.g. https://bored-api.appbrewery.com/random
 * 2. Query Parameters
 * 2.1 https://bored-api.appbrewery.com/filter?[query=value]
 * 2.2 https://bored-api.appbrewery.com/filter?[query=value]&[query2=value] - Multiple Parameters
 * 3. Path Parameters
 * 3.1 Fixed Path / Specific Resource / 
 * 3.2 https://bored-api.appbrewery.com/[end point] {path parameter}
 * 3.3 https://bored-api.appbrewery.com/activity/5914292
 * 
 * API Structure of DATA Requests - JSON
 * ====================================
 * 1. JavaScript Object Notation
 * 1.1 Serilization converting JS Object into JSON
 * 1.2 const jsonData = JSON.stringify(data) => const data JSON.parse(jsonDat) - Converting it back
 * 
 * 
 * AUTHENTICATION
 * =====================
 * 0. No Authentication
 * 1. Basic Authentication
 * 2. API Key Authorisation
 * 3. Token Based Authentication
 * 
 * 0. Bored API = Rate Limit of 100 per 15 minutes
 * Check IP ADDRESS - Public API
 * 
 * 1. Basic Authentication
 * Provide User name and password with each request
 * Base64 Encoding string in the Header
 * 
 * 2. API Key Authorisation
 * 2.1 Client allowed to use your service with a Key
 * 2.2 
 * 
 * 3. Token Based Authentication
 * 3.1 API Key can be deleted 
 * 3.2 Can be changed and no access to username and password
 * 3.3 Token is generated when login - OAUTH
 * 
 *  
 */