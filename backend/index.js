const http = require('http');
const app = require('./app.js');

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
