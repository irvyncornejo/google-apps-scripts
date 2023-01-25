const createAndSendDocument = () => {
    //Crear un nuevo Documento de Nombre Hola Mundo de AppScript
    const nombre = 'irvyn'
    const doc = DocumentApp.create(nombre)
    //Obtenemos el Body del Documento y agregamos un Parrafo
    doc.getBody().appendParagraph('Este Documento fue creado a usando Google apps scripts')
    //URL del Documento Generado 
    const url = doc.getUrl()
    //Obtenemos nuestro Correo Electronico
    const email = Session.getActiveUser().getEmail()
    //El asunto es el nombre del Documento
    const subject = doc.getName();
    //El cuerpo del correo max 20kb indica la URL de nuestro documento
    const body = 'Link con tu Documento: ' + url
    //Enviamos el correo (:
    GmailApp.sendEmail(email, subject, body)
  }