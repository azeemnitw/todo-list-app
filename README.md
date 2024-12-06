# To-Do List App

A simple **To-Do List application** built with **Node.js**, **TypeScript**, and **MongoDB**. This app supports basic CRUD operations to manage tasks.

---

## Features

- **Add New Tasks**: Create tasks with a title and description.
- **View Tasks**: Retrieve a list of all tasks.
- **Edit Tasks**: Update task details or mark them as completed.
- **Delete Tasks**: Remove tasks when no longer needed.

---

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or using MongoDB Atlas)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

---

## Project Structure

todolist-app/
├── src/                     # Source code folder
│   ├── config/              # Configuration files
│   │   └── db.ts            # Database connection logic
│   ├── models/              # Data models
│   │   └── task.model.ts    # Task schema and model
│   ├── routes/              # API routes
│   │   └── task.routes.ts   # Routes for task CRUD operations
│   ├── controllers/         # Request handlers
│   │   └── task.controller.ts # Handlers for task API endpoints
│   ├── app.ts               # Express app setup
│   └── server.ts            # Entry point for the server
├── .env                     # Environment variables (e.g., DB URL, PORT)
├── package.json             # Node.js project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
├── .gitignore               # Git ignored files (e.g., node_modules, .env)
└── README.md                # Project documentation



---

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **TypeScript**: Superset of JavaScript with static typing.
- **MongoDB**: Database for storing tasks.
- **Express**: Framework for building APIs.
- **Mongoose**: ODM library for MongoDB.
- **dotenv**: Environment variable management.

---

## Setup Instructions

Follow these steps to set up and run the project:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
2. **Install dependencies**
    npm install
3. **Setup environment variables**
   Create a .env file in the project root and add:
   MONGO_URI=mongodb://localhost:27017/todolist
   PORT=5005
4. **Run the application**
   npm run dev (In development phase)
   npm start (in production)
5. **Access the API**
    http://localhost:5005/api/tasks

**API Endpoints**
    Base URL
    bash
    Copy code
    http://localhost:5005/api/tasks
    Method	Endpoint	Description
    GET	/	Retrieve all tasks.
    POST	/	Create a new task.
    PUT	/:id	Update a task by ID.
    DELETE	/:id	Delete a task by ID.

 **Example Task Object**
  {
    "_id": "6751a74aa065ed34070d088d",
    "title": "Sample Task",
    "description": "This is a sample task.",
    "completed": false
  }

  **Scripts**
    npm run dev: Run the app in development mode (hot reloading).
    npm start: Run the app in production mode.
    npm run build: Compile TypeScript to JavaScript.

**Future Enhancements**
User authentication and authorization.
Due dates and priority levels for tasks.
Frontend interface using React or Angular.
Deployment to a cloud platform (e.g., AWS, Heroku)

**Contributing**
Feel free to fork this repository and submit pull requests to improve the project!



 

