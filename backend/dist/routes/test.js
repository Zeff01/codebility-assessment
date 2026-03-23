import { Router } from "express";
export const testRouter = Router();
testRouter.get("/test", (request, response) => {
    response.send("List of viewers");
});
//# sourceMappingURL=test.js.map