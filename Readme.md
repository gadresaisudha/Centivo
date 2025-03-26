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

Steps to Run server :
>>>>>
