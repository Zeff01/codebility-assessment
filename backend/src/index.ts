import express from "express";
import router from "./routes/routes";
import notFound from "./middleware/not-found.middleware";
import errorHandler from "./middleware/error.middleware";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const main = async () => {
  dotenv.config();
  const app = express();

  app.use(express.json());
  app.use(cookieParser());

  app.use("/api", router);

  app.use(notFound);
  app.use(errorHandler);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
  });
};

main();
