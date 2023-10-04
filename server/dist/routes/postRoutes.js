"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postsController_js_1 = require("../controllers/postsController.js");
const router = express_1.default.Router();
/* READ */
router.get('/', postsController_js_1.getPosts);
exports.default = router;
