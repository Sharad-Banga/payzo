"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xrouter = void 0;
const express_1 = require("express");
const user_1 = require("./user");
exports.xrouter = (0, express_1.Router)();
exports.xrouter.use("/user", user_1.userRoute);
exports.xrouter.get("/u", (req, res) => {
    res.send({
        "sss": "sss"
    });
});
