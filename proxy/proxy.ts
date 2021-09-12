import axios from "axios";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use((req: express.Request, res: express.Response, next: () => void) => {
  console.log(
    req.method,
    req.hostname,
    req.originalUrl,
    req.headers["content-type"],
    req.headers.authorization,
    req.body,
  );
  next();
});

app.use(cors());

const githubApiUrl = 'https://gh-trending-api.herokuapp.com';

app.get('/repositories', (req: Request, res: Response) => {
  (async () => {
    try {
      const response = await axios.get(`${githubApiUrl}/repositories`, {
        responseType: "stream",
      });
      response.data.pipe(res);
    } catch(e) {
      res.status(500);
      res.json({
        error: "Internal Server Error",
      });
    }
  })();
});

app.get('/developers', (req: Request, res: Response) => {
  (async () => {
    try {
      const response = await axios.get(`${githubApiUrl}/developers`, {
        responseType: "stream",
      });
      response.data.pipe(res);
    } catch(e) {
      res.status(500);
      res.json({
        error: "Internal Server Error",
      });
    }
  })();
});

app.listen(4000);

export default app;