import * as express from "express";
import "dotenv/config";
const port = process.env.PORT || 3200;

const app = express();

app.use(express.json());

app.get("/env", (req, res) => {
  res.json({
    env: process.env.NODE_ENV,
  });
});

app.get("/db-env", (req, res) => {
  res.json({
    "db-env": process.env.DB_HOST,
  });
});

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola, soy Poli",
  });
});

app.use(express.static("dist"));

app.listen(port, () => {
  console.log("iniciado en " + port);
});
