import * as express from "express";
const port = process.env.PORT || 3200;

const app = express();

app.use(express.json());

console.log(process.env);

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola, soy el servidor jiji :3",
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
