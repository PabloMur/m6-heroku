import * as express from "express";
import "dotenv/config";
const port = process.env.PORT || 3200;

const app = express();

app.use(express.json());

console.log(process.env.NODE_ENV);

app.get("/env", (req, res) => {
  res.json({
    env: process.env.NODE_ENV,
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

// class User {
//   nombre: string;
//   getNombre() {
//     return this.nombre;
//   }
// }

// const pablo = new User();
// pablo.nombre = "Pablo";
// console.log(pablo.getNombre());
