MERN To-Do Application
This is a full-stack To-Do application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create, update, delete, and mark tasks as complete.

Prerequisites
Make sure you have the following installed on your local development machine:

Node.js (version 14+)
npm (version 6+)
MongoDB (locally or on cloud using MongoDB Atlas)
Git

Installation
Step 1: Clone the Repository
Open a terminal and clone the repository to your local machine:

bash
git clone https://github.com/username/mern_todo.git
cd mern_todo
Step 2: Install Dependencies
There are two directories: one for the backend (/backend) and one for the frontend (/view). You need to install dependencies in both directories.

Install backend dependencies:
bash
cd backend
npm install

Install frontend dependencies:
bash
cd view
npm install
Step 3: Set Up Environment Variables
Create a .env file in the /server directory for the backend and provide necessary environment variables. Here’s an example:

bash
# .env file in server folder
MONGO_URI=Your Mongo Uri
PORT=5000
JWT_SECRET=your_jwt_secret
Note: If you are using MongoDB Atlas, replace MONGO_URI with your Atlas connection string.


Running the Project
Development Mode
Start the Backend: Open a terminal, go to the server directory, and run:

bash
npm run dev
Start the Frontend: Open a new terminal, go to the client directory, and run:

bash
npm start
The backend will be running on http://localhost:5000 and the frontend on http://localhost:3000.

Production Mode
To build and serve the project in production mode, follow these steps:

Build the Frontend: Inside the client directory:

bash
npm run build
Start the Backend (which serves the frontend as well): Inside the server directory:

bash
npm start
