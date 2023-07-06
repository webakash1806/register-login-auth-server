## User Management Backend Server

📄 This is the documentation for the User Management Backend Server, which allows users to create and login to their accounts. The server is built with Express and MongoDB and follows a structured approach with config, models, controller, and routes files.

## Endpoints
🔐 Authentication is required for the following endpoints:

### Register a User
Endpoint: /register
Method: POST
Description: Creates a new user account.
Request Body:
name (required): The user's name.
email (required): The user's email address.
password (required): The user's password.
Response:
status (200): User successfully registered.
status (501): Error occurred during registration.

### Login
Endpoint: /login
Method: POST
Description: Authenticates and logs in a user.
Request Body:
email (required): The user's email address.
password (required): The user's password.
Response:
status (200): User successfully logged in.
status (501): Authentication failed.


## Folder Structure
📁 The server follows a structured folder organization:
├── config
│   └── db.config.js
│   └── port.config.js
├── models
│   └── user.model.js
├── controller
│   └── user.controller.js
├── routes
│   └── user.router.js
├── middleware
│   ├── register.middleware.js
│   └── login.middlware.js
├── server.js
└── README.md

### config: 
Contains the database configuration file (db.config.js), where you can specify your MongoDB connection details.

### models: 
Includes the User model definition (user.model.js), which describes the user schema and interactions with the database.

### controllers: 
Contains the user controller (user.controller.js), responsible for handling user-related operations.

### routes: 
Defines the user routes (user.router.js), where the endpoints are specified and linked to their respective controller functions.

### middleware: 
Includes the middleware files (register.middleware.js and login.middlware.js), which perform validation checks before processing requests.

### server.js: 
The main entry point of the server.

### README.md: 
This documentation file.

## Dependencies
🔗 The server relies on the following dependencies:

### Express
### MongoDB
### Mongoose
### Body-parser
### Bcrypt

Make sure these dependencies are installed before running the server.

## Contributing
🤝 Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request on GitHub.


### ✨ Thank you for using the User Management Backend Server! If you have any questions, feel free to reach out.
