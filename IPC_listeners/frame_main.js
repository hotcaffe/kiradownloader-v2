const {app, ipcMain, dialog} = require('electron')
const path = require('path')
const extensions = require('../src/fileExtensions')

async function getLocalPath(win){
    const getLocalStorage = 'localStorage.getItem("kiradownloader_downloader_presets")'
    const localStorage = await win.webContents.executeJavaScript(getLocalStorage)
    const localStorageObject = JSON.parse(localStorage)
    return localStorageObject.path
}

function windowIPC(win){
    ipcMain.on('minimize-window', (event, data) =>{
        win.minimize()
    })
    ipcMain.on('close-window', (event, data) =>{
        app.exit()
    })
    ipcMain.on('open-directory-search', async (event, data) => {
        dialog.showOpenDialog(win, {
            title: 'Choose the destination folder',
            defaultPath: await getLocalPath(win),
            properties: ['openDirectory']
        }).then(folder => {
            if(!folder.canceled){
                event.reply('folder-path', folder.filePaths[0])
            }
        })
    })
    ipcMain.on('open-file-search', (event, data) => {
        dialog.showOpenDialog(win, {
            title: 'Choose the file to be converted',
            filters: [{
                name: 'All Files', extensions: [...extensions.image, ...extensions.media]
            }, {
                name: 'Images', extensions: extensions.image
            }, {
                name: 'Media', extensions: extensions.media
            }],
            properties: ['openFile']
        }).then(file => {
            if(!file.canceled){
                event.reply('file-path', {
                    fileName: path.parse(file.filePaths[0]).name,
                    fileExtension: path.extname(file.filePaths[0]),
                    filePath: file.filePaths[0]
                })
            }
        })
    })
}

module.exports = {windowIPC}