// Import required modules
const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { buildSchema } = require("graphql");
const path = require("path");

// Initialize Express app
const app = express();
const PORT = 3000;

// REST API Endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// GraphQL Schema and Resolvers
const schema = buildSchema(`
  type Query {
    hello: String
    add(x: Int, y: Int): Int
  }
`);

const rootValue = {
  hello: () => "Hello from GraphQL!",
  add: ({ x, y }) => x + y,
};

// GraphQL Endpoint
app.use(
  "/graphql",
  createHandler({
    schema,
    rootValue,
  }),
);

// Serve Static HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
