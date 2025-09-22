const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes/main");

// Basic route
// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

app.use(express.json());
routes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
