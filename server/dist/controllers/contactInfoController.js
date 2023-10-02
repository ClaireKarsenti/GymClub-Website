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
exports.saveContactInfo = void 0;
const ContactInfo_1 = __importDefault(require("../models/ContactInfo"));
const saveContactInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email, selectedClass, comment } = req.body;
        const contactInfo = new ContactInfo_1.default({
            fullName,
            email,
            selectedClass,
            comment,
        });
        yield contactInfo.save();
        res.status(201).json({ message: 'Data saved successfully.' });
    }
    catch (error) {
        console.error('Error saving data :', error);
        res.status(500).json({
            error: 'An error occurred while saving data.',
        });
    }
});
exports.saveContactInfo = saveContactInfo;
