const {app, ipcMain} = require('electron')

function windowIPC(win){
    ipcMain.on('minimize-window', (event, data) =>{
        win.minimize()
    })
    ipcMain.on('close-window', (event, data) =>{
        app.exit()
    })
}

module.exports = {windowIPC}