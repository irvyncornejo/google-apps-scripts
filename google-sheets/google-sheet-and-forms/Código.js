
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
    this.keys = ['Marca temporal','Dirección de correo electrónico','Mensaje de prueba']
  }
  validateSheet () {
    const sheets = this.ss.getSheets().map(sheet => sheet.getName())
    if (!(sheets.includes(this.nameSheet))){
      this.sheet = this.ss.insertSheet()
      this.sheet.setName(this.nameSheet)
      const refColumns = [...this.keys]
      refColumns.push('ID correo')
      this.sheet.appendRow(refColumns)
    }
    this.sheet = this.ss.getSheetByName(this.nameSheet)
  }
  unpackEvent () {
    console.info(this.event)
    return this.keys.map(value => this.event[value][0])
  }
  sendEmail(){
    const draft = GmailApp.createDraft(
      this.event[1], 
      `Correo de prueba ${this.event[0]}`, 
      this.event[2]
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
      console.log(this.event)
      this.sendEmail()
      this.createRegister()
    }catch(e){
      console.error(e)
    }

  }
}

const main = (event) => {
  new SendEmails(event.namedValues).run()
}

