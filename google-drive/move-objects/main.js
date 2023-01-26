const validateFolder = (folderName) => {
  const $folders_ref = []
  const folders = DriveApp.getFoldersByName(folderName)
  while (folders.hasNext()){
      let folder = folders.next()
      $folders_ref.push(folder.getId())
  }
  if(!$folders_ref.length){
    throw new Error(`Folder ${folderName} not exists`)
  }
  if($folders_ref.length === 2){
    throw new Error('There are two folders with the same name')
  } 
  return $folders_ref[0]
}

const moveObjects = (objects, childFolder,type) => {
  while (objects.hasNext()){
    let object = objects.next()
    console.log(`${type} ${object.getName()}`)
    object.moveTo(childFolder)
  }
}

const instantiateFolder =  (principalFolderId, childFolderId) => {
  const principalFolder = DriveApp.getFolderById(principalFolderId)
  const childFolder = DriveApp.getFolderById(childFolderId)
  const files = principalFolder.getFiles()
  const folders = principalFolder.getFolders()
  moveObjects(files, childFolder, 'file')
  moveObjects(folders, childFolder, 'folder')
}

const moveObjectsExecute = (
  principalFolderName='APPSCRIPT_MOVE', 
  childFolderName='APPSCRIPT'
) => {
  try{
    const principalFolderId = validateFolder(principalFolderName)
    const childFolderId = validateFolder(childFolderName)
    instantiateFolder(principalFolderId, childFolderId)
  }catch(e){
    console.log(e)
  }
}



