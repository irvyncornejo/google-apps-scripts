const url = ''

const doGet = (e) => {
  //Logger.log(e.parameter);// e por el evento de ejecución que estará reflejado 
  //return HtmlService.createHtmlOutputFromFile("index");
  return HtmlService.createTemplateFromFile("index").evaluate();
}

const userClick = (infAlumno,correo) => {
    const ss = SpreadsheetApp.openByUrl(url)
    const data = ss.getSheetByName('DB')
    data.appendRow([infAlumno.nombre,infAlumno.seccion,infAlumno.grupo, new Date(),correo])
    Logger.log(name + ' Bienvenid@')
    
}

// funcion para llamar a los archivos .css y .js dentro del html
const include = (filename) => {
    return HtmlService.createHtmlOutputFromFile(filename).getContent()

}