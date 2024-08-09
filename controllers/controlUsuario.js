import pool from "../config/db.js";

//post('/api/usuario')
export const crearUsuarioPost = async (req, res) => {
  const newUsuario = req.body; //toma la info de texto del formulario front
  //newUsuario.imagen = req.file.fieldname; //toma la info archivo
  console.log("el usuario cargado es :", req.body);

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query("INSERT INTO usuarios SET ?", [
      newUsuario,
    ]);
    console.log("El resultado es: ", result);
    connection.release();
    console.log("+++++++++Usuario agregado exitosamente+++++++++++++}");
    res.send("Usuario agregado exitosamente");
  } catch (error) {
    console.error(
      "------------Hubo un error al intentar cargar el ususario, encontrame!!!!----------------"
    );
    res
      .status(500)
      .send(
        "------------Hubo un error al intentar cargar el usuario, donde estas??--------------"
      );
  }
};

