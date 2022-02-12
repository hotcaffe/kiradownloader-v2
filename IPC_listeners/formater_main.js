const { ipcMain } = require("electron")
const {formatMedia} = require('../src/formater_manager')
const path = require('path')
 

module.exports = {
    formaterIPC(win){
        let abortStream = false

        ipcMain.on('format-content', (event, data) => {
            const filePath = path.join(data.path, data.fileName + '.' + data.format)
            formatMedia(data.file, filePath, (progress, child) => {
                if(abortStream){
                    child.stdin.write('q')
                    abortStream = false
                }
                event.reply('format-progress', progress)
            })
        })
        ipcMain.on('format-cancel', (event, data) => {
            abortStream = true
        })
    }
}