const main = (event) => {
  console.log(event.namedValues)
  sendEmail(event.namedValues)
}

const sendEmail = (event) => {
  const response = GmailApp.sendEmail(event['Dirección de correo electrónico'][0], 'subject', 'body')
  console.log(response)
}

const test = () => {
  const t = { 'Marca temporal': [ '27/1/2023 20:40:12' ],
  'Mensaje de prueba': [ 'test' ],
  'Dirección de correo electrónico': [ 'irvyncornejo@gmail.com' ] }
  console.log(t['Dirección de correo electrónico'][0])
}

const testEmail = () => {
  //const response = GmailApp.sendEmail('irvyncornejo@gmail.com', 'subject', 'body')
  const draft = GmailApp.createDraft('irvyncornejo@gmail.com', 'subject', 'body para checar id')
  const response = draft.send()
  console.log(response.getId())
}

const testGetEmail = () => {
  const id = '185f67b6614ee1d0'
  const email = GmailApp.getMessageById(id)
  console.log(email.isUnread())
}