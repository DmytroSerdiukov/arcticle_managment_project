"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("../constants/routes");
const router = (0, express_1.Router)();
router.post(routes_1.Auth.auth, () => {
    console.log("auth");
});
router.post(routes_1.Auth.register, () => {
    console.log("register");
});
exports.default = router;
