const helloWorldHtmlService = () => {
  const ui = DocumentApp.getUi() // Crear el objeto usando el mètodo ui y lo almacenando en la variable ui
  // manda a llamar el archivo o modelo de html para poder cargar el contenido del mismo
  const html = HtmlService.createTemplateFromFile('sideBar').evaluate()
    .setTitle('Barra lateral').setWidth(500) // titulo que aparecera en el barra lateral 
    .setSandboxMode(HtmlService.SandboxMode.NATIVE)// mètodo para cargar de manera màs ràpida el contenido de la ui
  ui.showSidebar(html) // mètodo que abre la barra lateral en el documento de google 
}
