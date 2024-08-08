import express from "express";
const router = express.Router();
import multer from "multer";
import { crearUsuarioPost } from "../controllers/controlUsuario.js";

//Middleware para cargar archivos(multer)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      console.log('file', file)
      cb(null, 'public/uploads')
  },
  fieldname: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage });

router.post("/api/usuarios",upload.single("imagen"), crearUsuarioPost);

export default router;
