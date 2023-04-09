import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || `3000`, 10);
const dev = process.env.NODE_ENV !== `production`;
const app = next({ dev });

app.prepare().then(() => {
  createServer(async (req, res) => {
    const { pathname, query } = parse(req.url!, true);
    await app.render(req, res, pathname ?? `/`, query);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? `development` : process.env.NODE_ENV
    }`
  );
});
