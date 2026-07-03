import express from 'express';
import { errorHandler } from './common/middleware/error.middleware.js';
import { appController } from './controller/app.router.js';


const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
appController(app);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

