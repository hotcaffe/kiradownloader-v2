const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const {windowIPC} = require('./IPC_listeners/frame_main')
const {downloaderIPC} = require('./IPC_listeners/download_main')
const {formaterIPC} = require('./IPC_listeners/formater_main')

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#888888',
        title: 'kiraDownloader v2',
        titleBarStyle: 'hidden',
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js')
        }
        
    })

    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools()
    windowIPC(win)
    downloaderIPC(win)
    formaterIPC(win)

}

app.disableHardwareAcceleration()

app.whenReady().then(() => {
    createWindow()
})
