import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.route.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', todoRoutes);
// Error handling middleware (should be after routes)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});