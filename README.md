![Roku-Emblem](https://user-images.githubusercontent.com/125234032/232244305-684560ee-c88c-4c5f-ac8d-7a31818b0a4f.jpg)
# ROKU User Management System (UMS)

UMS is a simple user management system built using Node.js and MySQL. It provides a basic login functionality and allows you to view and retrieve user data from the database.

## Installation

To install ROKU UMS, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/ums.git`
2. Install the dependencies: `npm install`

## Usage

To start the server, run `npm start` in your terminal. The server will be running on http://localhost:3000.

### Login

To log in, send a POST request to http://localhost:3000/login with the following JSON payload:
{
"username": "your-username",
"password": "your-password"
}


If the credentials are valid, you will receive a JSON response with a message of "success" and the user object. If the credentials are invalid, you will receive a JSON response with a message of "wrong password" or "no user".

### Get All Users

To retrieve all users, send a GET request to http://localhost:3000/users. You will receive a JSON response with an array of user objects. The user object contains the following fields:

- id
- username
- email
- avatar

Note that the fname, lname, and password fields are omitted for security reasons.

## Configuration

To configure the database connection, edit the `config/user.js` file with your own MySQL credentials.

## Credits

This project was created by Alexandra Lem - coder & Nicole(Zhihan) Chen - designer as part of the Interactive Media Program, Multimedia Authoring Crouse.
