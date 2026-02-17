const http = require("http");
const todoRouter = require("./routes/todo");

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const handled = await todoRouter(req, res);
    if (handled === null) {
      res.writeHead(404, { 
        "Content-Type": "application/json" 
      });
      res.end(JSON.stringify({ 
        success: false, 
        error: `Cannot ${req.method} ${req.url}` 
      }));
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 
      "Content-Type": "application/json" 
    });
    res.end(JSON.stringify({ 
      success: false, 
      error: "Internal server error" 
    }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("GET    /api/todos");
  console.log("GET    /api/todos/:id");
  console.log("POST   /api/todos");
  console.log("PUT    /api/todos/:id");
  console.log("DELETE /api/todos/:id");
});

module.exports = server;