const {app, BrowserWindow} = require('electron')
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
        icon: 'icon.png',
        resizable: false,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js'),
            // devTools: !app.isPackaged
        }
        
    })
    win.loadFile('kiradownloader-front/build/index.html')
    windowIPC(win)
    downloaderIPC(win)
    formaterIPC(win)
}

app.disableHardwareAcceleration()

app.whenReady().then(() => {
    createWindow()
})
