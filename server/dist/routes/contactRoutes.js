"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactInfoController_1 = require("../controllers/contactInfoController");
const router = (0, express_1.Router)();
router.post('/info', contactInfoController_1.saveContactInfo);
exports.default = router;
