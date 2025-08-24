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
exports.default = GetOne;
const error_1 = __importDefault(require("../../lib/error"));
const TodosTable_1 = __importDefault(require("../../db/TodosTable"));
const validatorAndSanitizer_1 = require("../../lib/validatorAndSanitizer");
/**
 * Return a single todo
 */
function GetOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //check if the id is a valid number
            const id = (0, validatorAndSanitizer_1.isAValidNumber)(req.params.id);
            //find and return a todo
            const todo = TodosTable_1.default.getTodoById(id);
            res.json(todo);
        }
        catch (error) {
            (0, error_1.default)(res, `${error}`);
        }
    });
}
//# sourceMappingURL=getone.js.map