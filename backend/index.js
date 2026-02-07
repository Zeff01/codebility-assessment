import express from "express";
import { config } from "./config/common.js";
import mainRoute from "./routes/mainRoute.js";

const app = express();
const PORT = config.PORT;

app.use(express.json());
app.use(mainRoute);

app.use((_req, res) => {
    res.status(config.STATUS.NOT_FOUND.CODE).json({
        success: false,
        message: config.ERROR.ROUTE_NOT_FOUND,
    });
});

app.use((err, _req, res, _next) => {
    if (err instanceof SyntaxError) {
        res.status(config.STATUS.VALIDATION_ERROR.CODE).json({
            success: false,
            message: config.ERROR.INVALID_JSON,
        });
        return;
    }
    const code = err.statusCode || config.STATUS.SERVER_ERROR.CODE;
    res.status(code).json({
        success: false,
        message: err.message || "Internal server error",
    });
});

app.listen(PORT, () => {
    console.log(`${config.SUCCESS.SERVER} http://localhost:${PORT}`);
});
