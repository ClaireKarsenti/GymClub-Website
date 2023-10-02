"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_js_1 = __importDefault(require("./routes/authRoutes.js"));
const contactRoutes_js_1 = __importDefault(require("./routes/contactRoutes.js"));
/* CONFIGURATIONS */
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
/* ROUTES */
app.use('/auth', authRoutes_js_1.default);
app.use('/contact', contactRoutes_js_1.default);
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose_1.default
    .connect(process.env.MONGO_URL || 'mongodb://localhost:27017/GymMate', {
    dbName: 'GymMate',
})
    .then(() => {
    app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`));
})
    .catch((error) => console.error(`${error} did not connect`));
