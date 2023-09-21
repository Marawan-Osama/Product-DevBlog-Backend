"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
app.use('/api/v1', routes_1.default);
app.get("/", function (req, res) {
    res.status(200).json({ "msg": "This is a test" });
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=app.js.map