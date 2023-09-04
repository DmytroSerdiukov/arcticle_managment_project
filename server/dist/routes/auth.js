"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("../constants/routes");
const Auth_1 = require("../controllers/Auth");
const router = (0, express_1.Router)();
const auth = new Auth_1.Auth();
router.post(routes_1.Auth.auth, (req, res) => {
    const data = req.body;
    auth.authUser(data);
});
router.post(routes_1.Auth.register, (req, res) => {
    const data = req.body;
    auth.registerUser(data);
});
exports.default = router;
