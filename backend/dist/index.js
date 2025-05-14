"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const index_1 = require("./routes/index");
const user_1 = require("./routes/user");
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", index_1.xrouter);
user_1.userRoute.get("/", (req, res) => {
    res.send({
        "msss": "sssssssss"
    });
});
app.listen(3000);
