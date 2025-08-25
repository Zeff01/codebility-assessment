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
exports.default = DeleteTodo;
const error_1 = __importDefault(require("../../lib/error"));
const TodosTable_1 = __importDefault(require("../../db/TodosTable"));
const validatorAndSanitizer_1 = require("../../lib/validatorAndSanitizer");
/**
 * delete a todo and return the new todos (an array)
 */
function DeleteTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (0, validatorAndSanitizer_1.isAValidNumber)(req.params.id);
            const newTodos = TodosTable_1.default.deleteTodo(id);
            res.json(newTodos);
        }
        catch (error) {
            (0, error_1.default)(res, `${error}`);
        }
    });
}
//# sourceMappingURL=deletetodo.js.map