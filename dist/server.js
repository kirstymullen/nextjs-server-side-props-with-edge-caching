"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url_1 = require("url");
const next_1 = __importDefault(require("next"));
const port = parseInt(process.env.PORT || `3000`, 10);
const dev = process.env.NODE_ENV !== `production`;
const app = (0, next_1.default)({ dev });
app.prepare().then(() => {
    (0, http_1.createServer)(async (req, res) => {
        const { pathname, query } = (0, url_1.parse)(req.url, true);
        await app.render(req, res, pathname !== null && pathname !== void 0 ? pathname : `/`, query);
    }).listen(port);
    console.log(`> Server listening at http://localhost:${port} as ${dev ? `development` : process.env.NODE_ENV}`);
});
