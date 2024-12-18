# Node.js Server Starter with Docker Compose

This project is a simple starter Node.js server built with Express. It includes:

- REST API endpoints.
- A GraphQL API using `graphql-http`.
- Static HTML file serving.

The server is containerized with Docker and ready for deployment using Docker Compose.

---

## Features

### 1. REST API

A simple REST endpoint:

- **Endpoint:** `/api/hello`
- **Method:** GET
- **Response:** JSON object with a greeting message.

### 2. GraphQL API

A GraphQL API with the following schema:

- **Query:** `hello` - Returns a greeting message.
- **Query:** `add(x: Int, y: Int)` - Adds two integers and returns the result.

**Endpoint:** `/graphql`

### 3. Static HTML

A static HTML file served at:

- **Endpoint:** `/`

---

## Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── index.html
├── package.json
├── server.js
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (for local development without Docker)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server locally:
   ```bash
   npm start
   ```

### Using Docker Compose

1. Build and start the services:

   ```bash
   docker-compose up --build
   ```

2. Access the application:

   - REST API: [http://localhost:3000/api/hello](http://localhost:3000/api/hello)
   - GraphQL API: [http://localhost:3000/graphql](http://localhost:3000/graphql)
   - Static HTML: [http://localhost:3000/](http://localhost:3000/)

3. Stop the services:
   ```bash
   docker-compose down
   ```

---

## Docker Setup

### Dockerfile

The `Dockerfile` defines how the application is containerized:

- Base image: `node:18`
- Copies application files.
- Installs dependencies.
- Exposes port `3000`.

### Docker Compose

The `docker-compose.yml` file sets up the service:

- Maps port `3000` on the container to port `3000` on the host.
- Runs the application using the `Dockerfile`.

---

## Example GraphQL Queries

### Query: `hello`

```graphql
{
  hello
}
```

**Response:**

```json
{
  "data": {
    "hello": "Hello from GraphQL!"
  }
}
```

### Query: `add(x: Int, y: Int)`

```graphql
{
  add(x: 5, y: 3)
}
```

**Response:**

```json
{
  "data": {
    "add": 8
  }
}
```

---

## Development

### Scripts

- `npm start`: Start the server.
- `npm run dev`: Start the server with `nodemon` for hot-reloading.

### Logs

- View logs for all services:
  ```bash
  docker-compose logs
  ```

---

## License

This project is licensed under the MIT License.
