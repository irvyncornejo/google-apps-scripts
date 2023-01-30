const ui = SpreadsheetApp.getUi()

const onOpen =  (event) =>{
    /**
    * #TODO Descripción de la función
    *
    * #TODO @param {String} Nombre {Tipo} Descripción
    * #TODO @return {Number} {Tipo} Descripción
    */
  ui.createMenu('Side Bar')
  .addItem('Usar Base','showSideBar')
  .addToUi()
}

const showSideBar = () =>{
  const htmlOutput = HtmlService 
      .createHtmlOutputFromFile('main.html')
      .setTitle('Side Bar')
  ui.showSidebar(htmlOutput)
}
