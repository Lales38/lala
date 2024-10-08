import express from "express";
import pool from "./config/db.js"
import router from "./routes/rutas.usuario.js";

const app = express();
const port = 3000;

//middlewares
//se utilizan para poder manipular los datos

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}, exitos`);
});
