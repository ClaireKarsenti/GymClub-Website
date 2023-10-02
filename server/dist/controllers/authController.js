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
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_js_1 = __importDefault(require("../models/User.js"));
/* REGISTER USER */
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = yield User_js_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'This user already exists.' });
        }
        const salt = yield bcrypt_1.default.genSalt();
        const passwordHash = yield bcrypt_1.default.hash(password, salt);
        const newUser = new User_js_1.default({
            firstName,
            lastName,
            email,
            password: passwordHash,
        });
        const savedUser = yield newUser.save();
        const token = jsonwebtoken_1.default.sign({ userId: savedUser._id }, 'your_secret_token');
        return res.status(201).json({ token, user: savedUser });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An error occurred.' });
    }
});
exports.register = register;
/* LOGIN USER */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_js_1.default.findOne({ email: email });
        if (!user)
            return res.status(400).json({ msg: 'User does not exist.' });
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ msg: 'Invalid credentials.' });
        const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
        const userWithoutPassword = Object.assign({}, user.toObject());
        delete userWithoutPassword.password;
        return res.status(200).json({ token, user: userWithoutPassword });
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(500).json({ error: 'An error occurred.' });
    }
});
exports.login = login;
