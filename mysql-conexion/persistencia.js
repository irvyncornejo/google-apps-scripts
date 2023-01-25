/**
 * Conexión general a la base de datos
 */
const conexionSQL=(cloud='AWS')=>{
  let conn = ''
  if (cloud === 'AWS'){
    conn = Jdbc.getConnection(`${datosConexionAWS.url}${datosConexionAWS.nombreConexion}/${datosConexionAWS.db}`, 
      {
        user:datosConexionAWS.usuario, 
        password:datosConexionAWS.contrasenia
      }
    )
  }
  else{
    conn = Jdbc.getCloudSqlConnection(`${datosConexionGCP.url}${datosConexionGCP.nombreConexion}/${datosConexionGCP.db}`,
      datosConexionGCP.usuario,
      datosConexionGCP.contrasenia
    )
  }
  const stmt = conn.createStatement()
  stmt.setMaxRows(1000)
  return stmt
}

/**
 * -> Ejecutar esta función <-
 * Función para visualizar las tablas en la base de datos definida.
 */
const obtenerTablas=()=>{
  const tablas = []
  const stmt = conexionSQL()
  const resultado = stmt.executeQuery(`SHOW TABLES;`)
  while(resultado.next()){
    tablas.push(resultado.getString(1))
  }
  resultado.close()
  stmt.close()
  Logger.log(tablas)
}