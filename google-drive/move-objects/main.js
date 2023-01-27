class GoogleDriveService {
  validateFolder (folderName) {
    const folders_ref = []
    const folders = DriveApp.getFoldersByName(folderName)
    while (folders.hasNext()){
        let folder = folders.next()
        folders_ref.push(folder.getId())
    }
    if(!folders_ref.length){
      throw new Error(`Folder ${folderName} not exists`)
    }
    if(folders_ref.length === 2){
      throw new Error('There are two folders with the same name')
    } 
    return folders_ref[0]
  }

  moveObjects (objects, childFolder,type) {
    console.log(objects.hasNext())
    while (objects.hasNext()){
      let object = objects.next()
      console.log(`${type} ${object.getName()}`)
      object.moveTo(childFolder)
    }
  }

  instantiateFolders (principalFolderId, childFolderId) {
    const principalFolder = DriveApp.getFolderById(principalFolderId)
    const childFolder = DriveApp.getFolderById(childFolderId)
    const files = principalFolder.getFiles()
    const folders = principalFolder.getFolders()
    this.moveObjects(files, childFolder, 'file')
    this.moveObjects(folders, childFolder, 'folder')
  }

  moveObjectsBtwFolders (principalFolderName, childFolderName) {
    try{
      const principalFolderId = this.validateFolder(principalFolderName)
      const childFolderId = this.validateFolder(childFolderName)
      this.instantiateFolders(principalFolderId, childFolderId)
    }catch(e){
      console.error(e)
    }
  }

  getFiles (fileName) {
    const files = DriveApp.getFilesByName(fileName)
    const files_ref = []
    while (files.hasNext()){
      let file = files.next()
      files_ref.push(file.getId())
    }
    if (!files_ref.length) throw new Error('Without documents')
    return DriveApp.getFilesByName(fileName)
  }

  moveObjectsSimilarNames (fileName) {
    const folderId = this.validateFolder(fileName)
    const folder = DriveApp.getFolderById(folderId)
    const objects = this.getFiles(fileName)
    this.moveObjects(objects, folder, 'file')
  }
}

const main = () => {
  const drive = new GoogleDriveService()
  drive.moveObjectsBtwFolders('APPSCRIPT', 'APPSCRIPT_MOVE')
  drive.moveObjectsSimilarNames('Documento sin título')
}


