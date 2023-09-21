"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
//Products
router.route('/products').get(function () { console.log('get products'); }).post(function () { });
router.route('/products/:id').get(function () { }).put(function () { }).delete(function () { });
//Updates
router.route('/update').get(function () { }).post(function () { });
router.route('/update/:id').get(function () { }).put(function () { }).delete(function () { });
//Update Points
router.route('/updatepoint').get(function () { }).post(function () { });
router.route('/updatepoint/:id').get(function () { }).put(function () { }).delete(function () { });
exports.default = router;
//# sourceMappingURL=routes.js.map