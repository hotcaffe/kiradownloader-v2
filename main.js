const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const {startIPC} = require('./IPC_listeners/frame_main')
const {downloaderIPC} = require('./IPC_listeners/download_main')

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
    startIPC(win)
    downloaderIPC(win)

}

app.disableHardwareAcceleration()

app.whenReady().then(() => {
    createWindow()
})

ipcMain.on('close-window', (event, data) =>{
    app.quit()
    app.exit()
})
