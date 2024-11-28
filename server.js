const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Points to your db.json file
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Enable CORS for cross-origin requests
server.use(cors());

// Use default middlewares (e.g., logging)
server.use(middlewares);

// Mount the JSON Server router
server.use(router);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
