import * as express from "express";
import * as cors from "cors";
import "dotenv/config";
const port = process.env.PORT || 3200;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static("dist"));

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

app.listen(port, () => {
  console.log("iniciado en " + port);
});
