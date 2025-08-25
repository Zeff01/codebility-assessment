"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getall_1 = __importDefault(require("../controller/todos/getall"));
const getone_1 = __importDefault(require("../controller/todos/getone"));
const newtodo_1 = __importDefault(require("../controller/todos/newtodo"));
const update_1 = __importDefault(require("../controller/todos/update"));
const deletetodo_1 = __importDefault(require("../controller/todos/deletetodo"));
const router = (0, express_1.Router)();
const BASEURL = '/api/todos';
router.get(BASEURL, getall_1.default);
router.get(`${BASEURL}/:id`, getone_1.default);
router.post(BASEURL, newtodo_1.default);
router.put(`${BASEURL}/:id`, update_1.default);
router.delete(`${BASEURL}/:id`, deletetodo_1.default);
exports.default = router;
//# sourceMappingURL=todos.js.map