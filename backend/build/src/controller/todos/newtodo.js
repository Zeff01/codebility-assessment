"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewTodo;
const error_1 = __importDefault(require("../../lib/error"));
const TodosTable_1 = __importDefault(require("../../db/TodosTable"));
const validatorAndSanitizer_1 = require("../../lib/validatorAndSanitizer");
/**
 * Add a new todo
 */
function NewTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.body.title)
                return (0, error_1.default)(res, "Title is required", 400);
            const sanitizeBody = (0, validatorAndSanitizer_1.stringSanitizer)(req.body.title);
            const newTodo = TodosTable_1.default.addTodo(sanitizeBody);
            res.json(newTodo);
        }
        catch (error) {
            (0, error_1.default)(res, `${error}`);
        }
    });
}
//# sourceMappingURL=newtodo.js.map