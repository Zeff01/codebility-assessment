"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// app initialization
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// Set the routing
app.use("/", todos_1.default);
app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map