"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ContactInfoSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
    },
    selectedClass: {
        type: String,
    },
    comment: {
        type: String,
        required: true,
        min: 2,
    },
}, { timestamps: true });
ContactInfoSchema.index({ email: 1 }, { unique: false });
const ContactInfo = mongoose_1.default.model('ContactInfo', ContactInfoSchema);
exports.default = ContactInfo;
