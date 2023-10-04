"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    postId: {
        type: String,
    },
    imgPost: {
        type: String,
    },
    imgRecentPost: {
        type: String,
    },
    title: {
        type: String,
    },
    writeAt: {
        type: String,
    },
    theme: {
        type: String,
    },
    content: {
        type: String,
    },
    details: {
        type: String,
    },
}, { timestamps: true });
const Post = mongoose_1.default.model('Post', PostSchema);
exports.default = Post;
