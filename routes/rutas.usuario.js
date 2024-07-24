import express from "express";
const routerUsu = express.Router();
import multer from "multer";
import  crearUsuarioPost  from "../controllers/controlUsuario.js";/* 
 
//Middleware para cargar archivos(multer)
/* const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
 */
routerUsu.post(
  "/api/usuarios", /* upload.single("imagen"),  */ crearUsuarioPost
);
/* routerUsu.post("/api/usuarios", crearUsuarioPost); */

export default routerUsu;
