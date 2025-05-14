"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://sharad_banga:sharad@cluster0.8vv4o.mongodb.net/");
const userSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});
exports.User = mongoose_1.default.model('User', userSchema);
