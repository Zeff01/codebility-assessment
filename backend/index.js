require('dotenv').config();
const app = require('./src/server');
const PORT = process.env.PORT;

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
