/**
 * Datos para la conexión para google cloud sql con un motor de base de datos mysql 5.7
 * o aws rds con un motor de base de datos mysql 5.7
 * Nota para la conexión con apps scripts no funciona al usar el motor de mysql  en la versión 8 o superior; hata el día 15-02-2021
 * Referencia -> https://developers.google.com/apps-script/guides/jdbc
 */
const datosConexionGCP= {
  nombreConexion: 'nombre Conexión en el dashboard de GCP - SQL',
  usuario: 'Tu usuario',
  contrasenia: 'Tu contraseña',
  db: 'Nombre de la base',
  url:'jdbc:google:mysql://'
}

const datosConexionAWS={
  nombreConexion: '<endpoint dado por AWS RDS>:3306',
  usuario: 'Tu usuario',
  contrasenia: 'Tu contraseña',
  db: 'Nombre de la base',
  url:'jdbc:mysql://'
}
