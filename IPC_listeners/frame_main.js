const {ipcMain} = require('electron')

function startIPC(win){
    ipcMain.on('minimize-window', (event, data) =>{
        win.minimize()
    })
}

module.exports = {startIPC}