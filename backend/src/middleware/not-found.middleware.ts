import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).send("ROUTE DOES NOT EXIST");
};

export default notFound;
