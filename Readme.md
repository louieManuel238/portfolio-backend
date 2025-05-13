# Portfolio Website Backend

This repository contains the backend code for my personal portfolio website. It provides APIs and server-side logic to support the frontend, manage content, and handle user interactions.

## Features

- RESTful API for portfolio projects, skills, and about and contact form
- Integration with a database for persistent storage
- Modular and scalable architecture

## Technologies Used

- Node.js
- Express.js
- KNEX
- dotenv for environment variables

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MSSQL Server

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/louieManuel238/portfolio-backend.git
    cd portfolio-backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file based on `env sample` and set your environment variables.

### Running the Server

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

- `GET /user/:id` - Get the user based on ID (1)
- `GET /works/:user` - Get all work experience of a user id
- `GET /works/:user/:id` - Get specific work experience of a user id
- `GET /projects/:user` - List all portfolio projects of a user id
- `GET /` - Default page


