"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const dompurify_1 = __importDefault(require("dompurify"));
function domcleanup(dom) {
    const window = new jsdom_1.JSDOM('').window;
    const DOMpurify = (0, dompurify_1.default)(window);
    return DOMpurify.sanitize(dom);
}
exports.default = domcleanup;
