
const validateEmail = () => {
  const id = '1d0'
  const email = GmailApp.getMessageById(id)
  console.log(email.isUnread())
}

class SendEmails{
  constructor(event){
    this.nameSheet = 'Registro de correos'
    this.ss = SpreadsheetApp.getActiveSpreadsheet()
    this.event = event
    this.sheet = NaN
  }
  validateSheet () {
    const sheets = this.ss.getSheets().map(sheet => sheet.getName())
    if (!(sheets.includes(this.nameSheet))){
      this.sheet = this.ss.insertSheet().setName(this.nameSheet)
    }
    this.sheet = this.ss.getSheetByName(this.nameSheet)
  }
  unpackEvent () {
    console.info(this.event)
    return Object.values(this.event).map(value => value[0])
  }
  sendEmail(){
    const draft = GmailApp.createDraft(
      this.event[2], 
      'Correo de prueba', 
      this.event[1]
    )
    const response = draft.send()
    this.event.push(response.getId())
  }
  createRegister(){
    this.sheet.appendRow(this.event)
  }
  run() {
    try{
      this.validateSheet()
      this.event = this.unpackEvent()
      this.sendEmail()
      this.createRegister()
    }catch(e){
      console.error(e)
    }

  }
}

const main = () => {
  const t = { 'Marca temporal': [ '27/1/2023 20:40:12' ],
  'Mensaje de prueba': [ 'test' ],
  'Dirección de correo electrónico': [ 'email@gmail.com' ] }
  new SendEmails(t).run()
}

