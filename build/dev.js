"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const app_1 = require("./app");
app_1.app.listen(3000, () => console.log("Listening on port 3000"));
//# sourceMappingURL=dev.js.map