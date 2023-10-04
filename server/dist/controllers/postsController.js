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
exports.getPosts = void 0;
const Post_js_1 = __importDefault(require("../models/Post.js"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
/* READ */
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post_js_1.default.find();
        res.status(200).json(posts);
        express_1.default.static(path_1.default.join(__dirname, './public/assets/blogpage'));
    }
    catch (error) {
        const errorMessage = error.message;
        res.status(404).json({ message: errorMessage });
    }
});
exports.getPosts = getPosts;
