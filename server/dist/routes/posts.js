"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("../constants/routes");
const router = (0, express_1.Router)();
router.get(routes_1.Posts.posts, () => {
    console.log("#1 posts endpoint");
});
router.get(routes_1.Posts.post, () => {
    console.log("# post id endpoint");
});
router.post(routes_1.Posts.posts, () => { });
router.put(routes_1.Posts.post, () => { });
router.delete(routes_1.Posts.post, () => { });
exports.default = router;
