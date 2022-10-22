import path from "path";
import express from "express";
import { config } from "dotenv";
import routes from "./routes";

config();

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(routes);

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

export default app;
