"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.Posts = void 0;
var Posts;
(function (Posts) {
    Posts["posts"] = "/posts";
    Posts["post"] = "/posts/:id";
})(Posts || (exports.Posts = Posts = {}));
var Auth;
(function (Auth) {
    Auth["auth"] = "/auth";
    Auth["register"] = "/register";
})(Auth || (exports.Auth = Auth = {}));
