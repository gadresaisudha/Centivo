Approach:

db.js:
Handles the connection to the MongoDB database using Mongoose. It connects to the database using the URI from the environment variables and logs whether the connection is successful or if there's an error.

User Model: The User model defines the schema for user data (name, email, age) and links to the users collection in the usersdb database.

userController.js:
Defines the getUserById function, which retrieves a user by their ID from the database if the ID is valid and their age is greater than 21. If the ID is invalid or the user doesn't meet the age condition, it sends a relevant error response.

API Endpoint: The userRoutes file defines an endpoint (/api/users/:id) that retrieves user details by id while validating the ObjectId format and ensuring the user's age is greater than 21.

index.js:
Sets up the Express server, loads environment variables, connects to the database, and defines middleware for handling JSON and URL-encoded data. It also mounts the user-related routes and starts the server on a specified port

Error Handling: Invalid ObjectId errors and cases where no users are found are handled gracefully.

Environment Configuration: The MONGO_URI connection string is stored in the environment variables for secure access.

Steps to setup and run this code:
>>>>git clone https://github.com/gadresaisudha/Centivo.git
>>>cd Centivo
>>>npm install
create a .env file locally and update it with following data:
MONGO_URI='mongodb+srv://saisudhagadrewg542:bQQtR4gnMUeHhqWM@sudhagadre.3mjut7o.mongodb.net/?retryWrites=true&w=majority&appName=SudhaGadre'
PORT=5000
>>>node index.js

you can query the from the browser using
http://localhost:5000/api/users/67e391f98ef58858d900a05c


Data present in mongodb database:

{"_id":{"$oid":"67e391f98ef58858d900a05c"},"name":"John Doe","email":"john.doe@example.com","age":{"$numberInt":"30"}}
{"_id":{"$oid":"67e391f98ef58858d900a05d"},"name":"Jane Smith","email":"jane.smith@example.com","age":{"$numberInt":"25"}}
{"_id":{"$oid":"67e391f98ef58858d900a05e"},"name":"Alice Johnson","email":"alice.johnson@example.com","age":{"$numberInt":"22"}}
{"_id":{"$oid":"67e391f98ef58858d900a05f"},"name":"Bob Williams","email":"bob.williams@example.com","age":{"$numberInt":"19"}}
{"_id":{"$oid":"67e391f98ef58858d900a060"},"name":"Charlie Brown","email":"charlie.brown@example.com","age":{"$numberInt":"35"}}
{"_id":{"$oid":"67e391f98ef58858d900a061"},"name":"Daisy Clark","email":"daisy.clark@example.com","age":{"$numberInt":"28"}}
{"_id":{"$oid":"67e391f98ef58858d900a062"},"name":"Ethan Miller","email":"ethan.miller@example.com","age":{"$numberInt":"20"}}
{"_id":{"$oid":"67e391f98ef58858d900a063"},"name":"Fiona Davis","email":"fiona.davis@example.com","age":{"$numberInt":"23"}}
{"_id":{"$oid":"67e391f98ef58858d900a064"},"name":"George Wilson","email":"george.wilson@example.com","age":{"$numberInt":"32"}}
{"_id":{"$oid":"67e391f98ef58858d900a065"},"name":"Hannah Lee","email":"hannah.lee@example.com","age":{"$numberInt":"21"}}
